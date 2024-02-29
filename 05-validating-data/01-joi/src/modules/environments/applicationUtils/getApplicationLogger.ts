import { type Logger, getLogger } from '@src/modules/loggers';
import { getApplicationLogLevel } from './getApplicationLogLevel';
import { getApplicationName } from './getApplicationName';

export function getApplicationLogger(
  name: string = getApplicationName(),
  level: string = getApplicationLogLevel()
): Logger {
  return getLogger(name, level);
}
