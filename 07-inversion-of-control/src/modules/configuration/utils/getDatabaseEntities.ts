import { EnvironmentVariables, getEnvironmentVariableAsArray } from '@src/modules/environment';
import { getAbsolutePaths } from '@src/utils';

export function getDatabaseEntities(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_ENTITIES));
}
