import { InvalidNumberConversionException } from '@src/exceptions/InvalidNumberConversionException';

export class ConversionUtils {
  public static toInteger = (s: string) => {
    const v = parseInt(s);

    if (isNaN(v)) {
      throw new InvalidNumberConversionException(s);
    }

    return v;
  };
}
