import { NodeEnvironments } from '@src/environments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isProduction(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.PRODUCTION;
}
