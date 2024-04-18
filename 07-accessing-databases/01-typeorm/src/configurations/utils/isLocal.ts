import { NodeEnvironments } from '@src/environments';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isLocal(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.LOCAL;
}
