import { NodeEnvironments } from '@src/libs/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isProduction(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.PRODUCTION;
}
