import { BaseException } from '@src/libs/exceptions';

export class InvalidApplicationPortException extends BaseException {
  public constructor(p: number) {
    super(`'${p}' is an invalid port number`);
  }
}
