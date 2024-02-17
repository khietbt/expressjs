import { EnvironmentVariable } from './EnvironmentVariable';
import { getEnvironmentVariable } from './environmentUtils';

export function getApplicationLogLevel(): string {
  return getEnvironmentVariable(EnvironmentVariable.APPLICATION_LOG_LEVEL);
}
