import { getEnvironmentVariableAsArray, EnvironmentVariables } from '@src/environments';
import { getAbsolutePaths } from '@src/utils';

export function getApplicationControllers(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_CONTROLLERS));
}
