import { EnvironmentVariables } from '../enums';
import { type EnvironmentVariable } from '../types';

export function getOptionalEnvironmentVariable(k: EnvironmentVariable): string | undefined {
  return process.env[EnvironmentVariables[k]];
}
