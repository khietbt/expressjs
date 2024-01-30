import { NotFoundException } from '@exceptions/NotFoundException';

export class EnvironmentVariableNotFoundException extends NotFoundException {
  public constructor(k: string) {
    super(`The environment variable '${k}' is not defined`);
  }
}
