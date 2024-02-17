import { EnvironmentVariable } from './EnvironmentVariable';
import { getEnvironmentVariable } from './environmentUtils';

export function getRunningEnvironment(): string {
  return getEnvironmentVariable(EnvironmentVariable.NODE_ENV);
}
