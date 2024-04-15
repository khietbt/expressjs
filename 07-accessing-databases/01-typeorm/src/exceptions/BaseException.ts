import { type HttpStatus, HttpStatuses } from '@src/http-statuses';

export class BaseException extends Error {
  public constructor(
    public readonly message: string,
    public readonly httpStatus: HttpStatus = HttpStatuses.INTERNAL_SERVER_ERROR
  ) {
    super(message);
  }
}
