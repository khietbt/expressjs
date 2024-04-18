import { NodeEnvironments } from '@src/environments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isStaging(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.STAGING;
}
