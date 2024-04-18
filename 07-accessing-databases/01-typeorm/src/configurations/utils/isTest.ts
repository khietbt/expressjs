import { NodeEnvironments } from '@src/environments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isTest(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.TEST;
}
