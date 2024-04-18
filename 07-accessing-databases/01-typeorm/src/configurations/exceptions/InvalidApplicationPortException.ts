import { BaseException } from '@src/exceptions';

export class InvalidApplicationPortException extends BaseException {
  public constructor(p: number) {
    super(`'${p}' is an invalid port number`);
  }
}
