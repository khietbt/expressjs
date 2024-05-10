import { getEnvironmentVariable, EnvironmentVariables } from '@src/libs/environment';

export function getApplicationVersion(): string {
  return getEnvironmentVariable(EnvironmentVariables.npm_package_version);
}
