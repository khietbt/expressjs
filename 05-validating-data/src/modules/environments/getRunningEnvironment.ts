import { EnvironmentVariable } from './EnvironmentVariable';
import { getEnvironmentVariable } from './environmentVariableUtils';

export function getRunningEnvironment(): string {
  return getEnvironmentVariable(EnvironmentVariable.NODE_ENV);
}
