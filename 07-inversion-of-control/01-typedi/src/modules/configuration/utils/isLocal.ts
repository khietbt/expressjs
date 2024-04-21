import { NodeEnvironments } from '@src/modules/environment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isLocal(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironments.LOCAL;
}
