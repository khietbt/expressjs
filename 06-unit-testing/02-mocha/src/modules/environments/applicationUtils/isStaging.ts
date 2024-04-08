import { NodeEnvironments } from '../NodeEnvironments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isStaging(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.STAGING;
}
