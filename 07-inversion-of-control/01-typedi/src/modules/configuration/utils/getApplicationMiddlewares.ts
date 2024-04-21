import { getEnvironmentVariableAsArray, EnvironmentVariables } from '@src/modules/environment';
import { getAbsolutePaths } from '@src/utils';

export function getApplicationMiddlewares(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_MIDDLEWARES));
}
