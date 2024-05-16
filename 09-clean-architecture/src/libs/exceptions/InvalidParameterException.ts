import { Exception } from './Exception';

export class InvalidParameterException extends Exception {
  public constructor(message: string) {
    super(message);
  }
}
