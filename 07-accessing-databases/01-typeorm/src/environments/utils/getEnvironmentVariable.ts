import { StringConstants } from '@src/constants';
import { isUndefined } from '@src/utils';
import { EnvironmentVariableNotFoundException } from '../exceptions';
import { type EnvironmentVariable } from '../types';
import { getOptionalEnvironmentVariable } from './getOptionalEnvironmentVariable';

export function getEnvironmentVariable(variable: EnvironmentVariable): string {
  const value = getOptionalEnvironmentVariable(variable);

  if (isUndefined(value)) {
    throw new EnvironmentVariableNotFoundException(variable);
  }

  return value ?? StringConstants.EMPTY;
}
