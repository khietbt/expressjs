import { HttpStatuses } from '../constants';
import { type HttpStatus } from '../types';
import { Exception } from './Exception';

export abstract class HttpException extends Exception {
  public constructor(
    message: string,
    public readonly httpStatus: HttpStatus = HttpStatuses.INTERNAL_SERVER_ERROR
  ) {
    super(message);
  }
}
