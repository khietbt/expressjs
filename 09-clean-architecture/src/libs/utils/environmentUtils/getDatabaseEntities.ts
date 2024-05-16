import { EnvironmentVariables, getEnvironmentVariableAsArray } from '@src/libs/environment';
import { getAbsolutePaths } from '@src/libs/utils';

export function getDatabaseEntities(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_ENTITIES));
}
