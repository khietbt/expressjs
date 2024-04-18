import { NotFoundException } from '@src/exceptions';
import { EnvironmentVariables } from '../enums';
import { type EnvironmentVariable } from '../types';

export class EnvironmentVariableNotFoundException extends NotFoundException {
  public constructor(k: EnvironmentVariable) {
    super(`Environment variable '${EnvironmentVariables[k]}' is not defined`);
  }
}
