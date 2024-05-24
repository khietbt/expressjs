import { type IException } from '../IException';
import { type ExceptionCode } from '../types';

export abstract class Exception extends Error implements IException {
  public constructor(
    public readonly code: ExceptionCode,
    public readonly message: string,
    public readonly data: unknown
  ) {
    super(message);
  }
}
