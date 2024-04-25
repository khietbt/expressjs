import { BaseException } from '@src/exceptions';
import { HttpStatuses } from '@src/http-statuses';
import { type NextFunction, type Request, type Response } from 'express';
import { Middleware, type ExpressErrorMiddlewareInterface } from 'routing-controllers';

function error2status(error: Error): number {
  if (error instanceof BaseException) {
    return error.httpStatus;
  }

  return HttpStatuses.INTERNAL_SERVER_ERROR;
}

@Middleware({ type: 'after' })
export class ErrorHandlingMiddleware implements ExpressErrorMiddlewareInterface {
  public error(error: Error, _request: Request, response: Response, next: NextFunction): void {
    response.status(error2status(error)).json({ status: 'error', message: error.message });

    next(error);
  }
}
