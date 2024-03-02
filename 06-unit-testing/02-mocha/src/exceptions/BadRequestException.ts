export class BadRequestException extends Error {
  public constructor(message: string) {
    super(message);
  }
}
