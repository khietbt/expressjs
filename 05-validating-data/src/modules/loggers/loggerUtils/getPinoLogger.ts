import { isUndefined } from '@src/utils';
import * as pino from 'pino';

const loggers: Record<string, pino.Logger> = {};

export function getPinoLogger(level: string): pino.Logger {
  if (isUndefined(loggers[level])) {
    loggers[level] = pino.default({
      level
    });
  }

  return loggers[level];
}
