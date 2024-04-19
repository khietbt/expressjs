import { type NodeEnvironment, getEnvironmentVariable, EnvironmentVariables } from '@src/modules/environment';

export function getApplicationRunningEnvironment(): NodeEnvironment {
  return getEnvironmentVariable(EnvironmentVariables.NODE_ENV) as NodeEnvironment;
}
