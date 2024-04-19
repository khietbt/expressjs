import { getEnvironmentVariable, EnvironmentVariables } from '@src/modules/environment';

export function getApplicationRoutePrefix(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_ROUTE_PREFIX);
}
