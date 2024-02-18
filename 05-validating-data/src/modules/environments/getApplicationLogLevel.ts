import { EnvironmentVariable } from './EnvironmentVariable';
import { getEnvironmentVariable } from './environmentVariableUtils';

export function getApplicationLogLevel(): string {
  return getEnvironmentVariable(EnvironmentVariable.APPLICATION_LOG_LEVEL);
}
