import { getEnvironmentVariableAsArray, EnvironmentVariables } from '@src/modules/environment';
import { getAbsolutePaths } from '@src/utils';

export function getApplicationEntities(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_ENTITIES));
}
