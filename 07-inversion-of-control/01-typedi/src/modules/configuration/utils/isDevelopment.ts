import { NodeEnvironments } from '@src/modules/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isDevelopment(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.DEVELOPMENT;
}
