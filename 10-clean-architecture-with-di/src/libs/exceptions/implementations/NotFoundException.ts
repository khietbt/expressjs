import { ExceptionCodes } from '../enums';
import { Exception } from './Exception';

export class NotFoundException extends Exception {
  public constructor(message: string, data: unknown = undefined) {
    super(ExceptionCodes.NOT_FOUND, message, data);
  }
}
