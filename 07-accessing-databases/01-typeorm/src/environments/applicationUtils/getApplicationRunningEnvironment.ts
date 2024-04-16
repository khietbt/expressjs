import { EnvironmentVariables } from '../EnvironmentVariables';
import { type NodeEnvironment } from '../NodeEnvironment';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationRunningEnvironment(): NodeEnvironment {
  return getEnvironmentVariable(EnvironmentVariables.NODE_ENV) as NodeEnvironment;
}
