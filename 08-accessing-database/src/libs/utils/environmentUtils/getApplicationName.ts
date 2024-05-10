import { getEnvironmentVariable, EnvironmentVariables } from '@src/libs/environment';

export function getApplicationName(): string {
  return getEnvironmentVariable(EnvironmentVariables.npm_package_name);
}
