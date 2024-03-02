import { NodeEnvironment } from '../NodeEnvironment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isTest(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironment.TEST;
}
