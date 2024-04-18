import { NodeEnvironments } from '@src/environments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isDevelopment(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.DEVELOPMENT;
}
