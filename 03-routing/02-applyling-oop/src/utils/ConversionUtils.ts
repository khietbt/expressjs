import { InvalidNumberConversionException } from '@src/exceptions/InvalidNumberConversionException';

export class ConversionUtils {
  public static toInteger = (s: string) => {
    if (!/^\d+$/.test(s)) {
      throw new InvalidNumberConversionException(s);
    }

    return parseInt(s);
  };
}
