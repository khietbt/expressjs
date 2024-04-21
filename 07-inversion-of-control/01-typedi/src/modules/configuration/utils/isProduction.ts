import { NodeEnvironments } from '@src/modules/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isProduction(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.PRODUCTION;
}
