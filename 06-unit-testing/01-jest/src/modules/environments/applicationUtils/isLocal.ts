import { NodeEnvironment } from '../NodeEnvironment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isLocal(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironment.LOCAL;
}
