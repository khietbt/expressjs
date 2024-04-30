import { getEnvironmentVariable, EnvironmentVariables } from '@src/libs/environment';

export function getApplicationRoutePrefix(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_ROUTE_PREFIX);
}
