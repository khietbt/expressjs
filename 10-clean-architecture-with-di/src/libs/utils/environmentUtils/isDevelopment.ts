import { NodeEnvironments } from '@src/libs/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isDevelopment(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.DEVELOPMENT;
}
