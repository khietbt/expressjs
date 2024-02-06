import { EnvironmentVariableConstants } from '../constants';
import { NotFoundException } from './NotFoundException';

export class EnvironmentVariableNotFoundException extends NotFoundException {
  public constructor(k: EnvironmentVariableConstants) {
    super(`Environment variable '${EnvironmentVariableConstants[k]}' is not defined`);
  }
}
