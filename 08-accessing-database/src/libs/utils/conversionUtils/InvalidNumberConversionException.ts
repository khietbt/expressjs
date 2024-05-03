import { BaseException } from '@src/libs/exceptions';

export class InvalidNumberConversionException extends BaseException {
  public constructor(s: string) {
    super(`'${s}' is an invalid number`);
  }
}
