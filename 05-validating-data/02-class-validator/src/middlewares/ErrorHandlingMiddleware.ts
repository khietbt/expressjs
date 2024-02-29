import { NotFoundException } from '@src/exceptions';
import { type NextFunction, type Request, type Response } from 'express';
import { BadRequestError, type ExpressErrorMiddlewareInterface, Middleware } from 'routing-controllers';

function error2status(error: Error): number {
  if (error instanceof NotFoundException) {
    return 404;
  }

  if (error instanceof BadRequestError) {
    return 400;
  }

  return 500;
}

@Middleware({ type: 'after' })
export class ErrorHandlingMiddleware implements ExpressErrorMiddlewareInterface {
  public error(error: Error, _request: Request, response: Response, next: NextFunction): void {
    response.status(error2status(error)).json({ status: 'error', message: error.message });

    next(error);
  }
}
