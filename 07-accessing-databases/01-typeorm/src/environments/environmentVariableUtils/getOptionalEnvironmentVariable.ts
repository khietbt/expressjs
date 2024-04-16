import { EnvironmentVariables } from '../EnvironmentVariables';

export function getOptionalEnvironmentVariable(k: EnvironmentVariables): string | undefined {
  return process.env[EnvironmentVariables[k]];
}
