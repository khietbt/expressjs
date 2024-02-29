import { NotFoundException } from '@src/exceptions';

import { EnvironmentVariable } from './EnvironmentVariable';

export class EnvironmentVariableNotFoundException extends NotFoundException {
  public constructor(k: EnvironmentVariable) {
    super(`Environment variable '${EnvironmentVariable[k]}' is not defined`);
  }
}
