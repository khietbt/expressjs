import { HttpStatuses } from '@src/http-statuses';
import { BaseException } from './BaseException';

export class NotFoundException extends BaseException {
  public constructor(public readonly message: string) {
    super(message, HttpStatuses.NOT_FOUND);
  }
}
