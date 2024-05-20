import { type IException } from './IException';
import { type ExceptionCode } from './types';

export abstract class Exception extends Error implements IException {
  public constructor(
    public readonly code: ExceptionCode,
    message: string
  ) {
    super(message);
  }
}
