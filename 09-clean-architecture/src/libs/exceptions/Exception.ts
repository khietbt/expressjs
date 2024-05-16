import { type IException } from './IException';

export abstract class Exception extends Error implements IException {
  public constructor(public readonly message: string) {
    super(message);
  }
}
