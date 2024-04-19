import { StringConstants } from '@src/constants';
import { type EnvironmentVariable } from '../types';
import { getOptionalEnvironmentVariable } from './getOptionalEnvironmentVariable';

export function getEnvironmentVariableAsArray(
  variable: EnvironmentVariable,
  separator: string = StringConstants.COMMA
): string[] {
  return getOptionalEnvironmentVariable(variable)?.split(separator) ?? [];
}
