export class InvalidApplicationPortException extends Error {
  public constructor(p: number) {
    super(`'${p}' is an invalid port number`);
  }
}
