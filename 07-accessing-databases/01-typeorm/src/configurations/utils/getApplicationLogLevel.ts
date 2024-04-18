import { getEnvironmentVariable, EnvironmentVariables } from '@src/environments';

export function getApplicationLogLevel(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_LOG_LEVEL);
}
