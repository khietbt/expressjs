import { NodeEnvironment } from '../NodeEnvironment';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function isDevelopment(): boolean {
  return getApplicationRunningEnvironment() === NodeEnvironment.DEVELOPMENT;
}
