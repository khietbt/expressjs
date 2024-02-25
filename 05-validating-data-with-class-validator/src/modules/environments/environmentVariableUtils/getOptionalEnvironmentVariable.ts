import { EnvironmentVariable } from '../EnvironmentVariable';

export function getOptionalEnvironmentVariable(k: EnvironmentVariable): string | undefined {
  return process.env[EnvironmentVariable[k]];
}
