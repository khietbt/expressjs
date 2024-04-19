import { NodeEnvironments } from '@src/modules/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isStaging(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.STAGING;
}
