import { getAbsolutePaths } from '@src/utils';
import { getEnvironmentVariableAsArray } from '../environmentVariableUtils';
import { EnvironmentVariable } from '../EnvironmentVariable';

export function getApplicationMiddlewares(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariable.APPLICATION_MIDDLEWARES));
}
