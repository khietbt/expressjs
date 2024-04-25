import { getEnvironmentVariable, EnvironmentVariables } from '@src/modules/environment';

export function getApplicationLogLevel(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_LOG_LEVEL);
}
