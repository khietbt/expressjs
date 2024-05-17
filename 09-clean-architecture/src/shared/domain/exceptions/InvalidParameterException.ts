import { ExceptionCodes } from '../enums';
import { Exception } from './Exception';

export class InvalidParameterException extends Exception {
  public constructor(message: string) {
    super(ExceptionCodes.INVALID_PARAMETER, message);
  }
}
