import { NodeEnvironments } from '@src/libs/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isTest(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.TEST;
}
