import { getEnvironmentVariable, EnvironmentVariables } from '@src/environments';

export function getApplicationRoutePrefix(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_ROUTE_PREFIX);
}
