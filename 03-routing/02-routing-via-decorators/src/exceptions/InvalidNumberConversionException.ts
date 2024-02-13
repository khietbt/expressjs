export class InvalidNumberConversionException extends Error {
  public constructor(s: string) {
    super(`'${s}' is an invalid number`);
  }
}
