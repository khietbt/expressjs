import { StringConstants } from '@src/constants';
import { type EnvironmentVariable } from '../EnvironmentVariable';
import { getOptionalEnvironmentVariable } from './getOptionalEnvironmentVariable';
import { isUndefined } from '@src/utils';
import { EnvironmentVariableNotFoundException } from '../EnvironmentVariableNotFoundException';

export function getEnvironmentVariable(variable: EnvironmentVariable): string {
  const value = getOptionalEnvironmentVariable(variable);

  if (isUndefined(value)) {
    throw new EnvironmentVariableNotFoundException(variable);
  }

  return value ?? StringConstants.EMPTY;
}
