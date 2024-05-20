import { ExceptionCodes } from '../enums';
import { Exception } from './Exception';

export class InvalidParameterException extends Exception {
  public constructor(message: string, data: unknown = undefined) {
    super(ExceptionCodes.INVALID_PARAMETER, message, data);
  }
}
