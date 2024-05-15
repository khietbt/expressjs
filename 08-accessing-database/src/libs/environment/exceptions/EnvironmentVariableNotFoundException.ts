import { HttpNotFoundException } from '@src/libs/exceptions';
import { EnvironmentVariables } from '../enums';
import { type EnvironmentVariable } from '../types';

export class EnvironmentVariableNotFoundException extends HttpNotFoundException {
  public constructor(k: EnvironmentVariable) {
    super(`Environment variable '${EnvironmentVariables[k]}' is not defined`);
  }
}
