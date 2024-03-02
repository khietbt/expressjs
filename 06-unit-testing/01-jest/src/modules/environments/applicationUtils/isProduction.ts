import { NodeEnvironment } from '../NodeEnvironment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isProduction(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironment.PRODUCTION;
}
