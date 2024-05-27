import { InvalidParameterException } from '@src/libs/exceptions';

export class InvalidNumberConversionException extends InvalidParameterException {
  public constructor(s: string) {
    super(`'${s}' is an invalid number`, { s });
  }
}
