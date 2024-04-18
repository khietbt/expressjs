import { getEnvironmentVariable } from '@src/environments';
import { EnvironmentVariables } from '@src/environments/enums';
import { type NodeEnvironment } from '@src/environments/types';

export function getApplicationRunningEnvironment(): NodeEnvironment {
  return getEnvironmentVariable(EnvironmentVariables.NODE_ENV) as NodeEnvironment;
}
