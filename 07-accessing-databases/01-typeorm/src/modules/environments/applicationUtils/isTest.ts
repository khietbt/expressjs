import { NodeEnvironments } from '../NodeEnvironments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isTest(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.TEST;
}
