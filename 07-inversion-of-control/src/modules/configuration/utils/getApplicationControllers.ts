import { getEnvironmentVariableAsArray, EnvironmentVariables } from '@src/modules/environment';
import { getAbsolutePaths } from '@src/utils';

export function getApplicationControllers(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_CONTROLLERS));
}
