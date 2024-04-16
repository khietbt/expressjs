import { StringConstants } from '@src/constants';
import { isUndefined } from '@src/utils';
import { type EnvironmentVariable } from '../EnvironmentVariable';
import { EnvironmentVariableNotFoundException } from '../EnvironmentVariableNotFoundException';
import { getOptionalEnvironmentVariable } from './getOptionalEnvironmentVariable';

export function getEnvironmentVariable(variable: EnvironmentVariable): string {
  const value = getOptionalEnvironmentVariable(variable);

  if (isUndefined(value)) {
    throw new EnvironmentVariableNotFoundException(variable);
  }

  return value ?? StringConstants.EMPTY;
}
