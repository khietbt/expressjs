import { EnvironmentVariable } from '../EnvironmentVariable';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationRunningEnvironment(): string {
  return getEnvironmentVariable(EnvironmentVariable.NODE_ENV);
}
