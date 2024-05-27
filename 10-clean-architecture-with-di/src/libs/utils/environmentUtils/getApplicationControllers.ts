import { getEnvironmentVariableAsArray, EnvironmentVariables } from '../../environment';
import { getAbsolutePaths } from '../pathUtils';

export function getApplicationControllers(): string[] {
  return getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.APPLICATION_CONTROLLERS));
}
