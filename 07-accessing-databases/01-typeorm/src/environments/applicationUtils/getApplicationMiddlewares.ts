import { getAbsolutePaths } from '@src/utils';
import { getEnvironmentVariableAsArray } from '../environmentVariableUtils';
import { EnvironmentVariables } from '../EnvironmentVariables';

export function getApplicationMiddlewares(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_MIDDLEWARES));
}
