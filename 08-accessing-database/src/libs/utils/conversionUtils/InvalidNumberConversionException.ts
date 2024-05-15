import { Exception } from '@src/libs/exceptions';

export class InvalidNumberConversionException extends Exception {
  public constructor(s: string) {
    super(`'${s}' is an invalid number`);
  }
}
