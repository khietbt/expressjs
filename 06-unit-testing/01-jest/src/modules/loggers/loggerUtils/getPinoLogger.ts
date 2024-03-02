import { isUndefined } from '@src/utils';
import * as pino from 'pino';

const loggers: Record<string, pino.Logger> = {};

export function getPinoLogger(name: string, level: string): pino.Logger {
  if (isUndefined(loggers[level])) {
    loggers[level] = pino.default({
      level,
      timestamp: pino.stdTimeFunctions.isoTime,
      formatters: {
        level: (label, _number) => {
          return {
            level: label
          };
        },
        bindings: (_bindings) => {
          return {
            applicationName: name
          };
        }
      }
    });
  }

  return loggers[level];
}
