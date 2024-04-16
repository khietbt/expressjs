import { BaseException } from '@src/exceptions';

export class InvalidNumberConversionException extends BaseException {
  public constructor(s: string) {
    super(`'${s}' is an invalid number`);
  }
}
