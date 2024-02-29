import { EnvironmentVariable } from '../EnvironmentVariable';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationRoutePrefix(): string {
  return getEnvironmentVariable(EnvironmentVariable.APPLICATION_ROUTE_PREFIX);
}
