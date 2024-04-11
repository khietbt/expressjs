import { NodeEnvironments } from '../NodeEnvironments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isLocal(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.LOCAL;
}
