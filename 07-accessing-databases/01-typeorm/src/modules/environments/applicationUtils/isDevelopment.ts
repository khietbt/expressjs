import { NodeEnvironments } from '../NodeEnvironments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isDevelopment(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.DEVELOPMENT;
}
