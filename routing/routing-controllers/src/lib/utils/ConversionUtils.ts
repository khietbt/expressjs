export class ConversionUtils {
  public static toNumber = (s: string): number => {
    const v = parseInt(s);

    if (isNaN(v)) {
      throw new Error(`'${s}' is not a valid number`);
    }

    return v;
  };
}
