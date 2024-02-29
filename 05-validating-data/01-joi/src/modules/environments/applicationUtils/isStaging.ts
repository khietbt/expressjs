import { NodeEnvironment } from '../NodeEnvironment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isStaging(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironment.STAGING;
}
