import { NodeEnvironments } from '@src/libs/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isStaging(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.STAGING;
}
