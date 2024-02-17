import { NotFoundException } from '@src/exceptions';
import { type NextFunction, type Request, type Response } from 'express';

const error2status = (error: Error): number => {
  if (error instanceof NotFoundException) {
    return 404;
  }

  return 500;
};

export const errorHandlingMiddleware = (
  error: Error,
  _request: Request,
  response: Response,
  _next: NextFunction
): void => {
  response.status(error2status(error)).send({
    message: error.message
  });
};
