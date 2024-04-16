import { EnvironmentVariables } from '../EnvironmentVariables';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationRoutePrefix(): string {
  return getEnvironmentVariable(EnvironmentVariables.APPLICATION_ROUTE_PREFIX);
}
