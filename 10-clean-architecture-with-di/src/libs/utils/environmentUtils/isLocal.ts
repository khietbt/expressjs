import { NodeEnvironments } from '@src/libs/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isLocal(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.LOCAL;
}
