import { getAbsolutePaths } from '@src/utils';
import { getEnvironmentVariableAsArray } from '../environmentVariableUtils';
import { EnvironmentVariable } from '../EnvironmentVariable';

export function getApplicationControllers(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariable.APPLICATION_CONTROLLERS));
}
