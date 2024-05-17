import { type ExceptionCode } from '../types';

export class Exception extends Error {
  public constructor(
    public readonly code: ExceptionCode,
    message: string
  ) {
    super(message);

    this.name = new.target.name;
  }
}
