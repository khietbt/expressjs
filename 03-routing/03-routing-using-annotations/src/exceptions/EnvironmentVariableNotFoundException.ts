import { NotFoundException } from './NotFoundException';

export class EnvironmentVariableNotFoundException extends NotFoundException {
  public constructor(k: string) {
    super(`Environment variable '${k}' is not defined`);
  }
}
