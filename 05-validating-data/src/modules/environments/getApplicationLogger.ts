import { type Logger, getLogger } from '../loggers';
import { getApplicationLogLevel } from './getApplicationLogLevel';

export function getApplicationLogger(level: string = getApplicationLogLevel()): Logger {
  return getLogger(level);
}
