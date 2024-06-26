import { NodeEnvironments } from '../NodeEnvironments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isProduction(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.PRODUCTION;
}
