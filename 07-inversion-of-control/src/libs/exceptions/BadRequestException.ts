import { HttpStatuses } from '@src/libs/http-statuses';
import { BaseException } from './BaseException';

export class BadRequestException extends BaseException {
  public constructor(public readonly message: string) {
    super(message, HttpStatuses.BAD_REQUEST);
  }
}
