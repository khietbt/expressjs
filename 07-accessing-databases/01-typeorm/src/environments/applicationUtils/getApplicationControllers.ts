import { getAbsolutePaths } from '@src/utils';
import { EnvironmentVariables } from '../EnvironmentVariables';
import { getEnvironmentVariableAsArray } from '../environmentVariableUtils';

export function getApplicationControllers(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_CONTROLLERS));
}
