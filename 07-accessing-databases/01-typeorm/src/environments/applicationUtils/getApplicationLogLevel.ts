import { EnvironmentVariables } from '../EnvironmentVariables';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationLogLevel(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_LOG_LEVEL);
}
