import { EnvironmentVariable } from '../EnvironmentVariable';
import { type NodeEnvironment } from '../NodeEnvironment';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationRunningEnvironment(): NodeEnvironment {
  return getEnvironmentVariable(EnvironmentVariable.NODE_ENV) as NodeEnvironment;
}
