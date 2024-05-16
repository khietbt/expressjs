import { getEnvironmentVariable, EnvironmentVariables } from '@src/libs/environment';

export function getApplicationLogLevel(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_LOG_LEVEL);
}
