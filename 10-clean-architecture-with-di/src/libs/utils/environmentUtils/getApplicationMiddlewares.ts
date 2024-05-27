import { getEnvironmentVariableAsArray, EnvironmentVariables } from '@src/libs/environment';
import { getAbsolutePaths } from '@src/libs/utils';

export function getApplicationMiddlewares(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_MIDDLEWARES));
}
