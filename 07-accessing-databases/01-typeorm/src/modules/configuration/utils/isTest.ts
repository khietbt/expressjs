import { NodeEnvironments } from '@src/modules/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isTest(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.TEST;
}
