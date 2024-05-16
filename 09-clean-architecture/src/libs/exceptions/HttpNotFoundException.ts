import { HttpStatuses } from '../constants';
import { HttpException } from './HttpException';
import { type IHttpException } from './IHttpException';

export class HttpNotFoundException extends HttpException implements IHttpException {
  public constructor(message: string) {
    super(message, HttpStatuses.NOT_FOUND);
  }
}
