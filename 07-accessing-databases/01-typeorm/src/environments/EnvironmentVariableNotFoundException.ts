import { NotFoundException } from '@src/exceptions';

import { type EnvironmentVariable } from './EnvironmentVariable';
import { EnvironmentVariables } from './EnvironmentVariables';

export class EnvironmentVariableNotFoundException extends NotFoundException {
  public constructor(k: EnvironmentVariable) {
    super(`Environment variable '${EnvironmentVariables[k]}' is not defined`);
  }
}
