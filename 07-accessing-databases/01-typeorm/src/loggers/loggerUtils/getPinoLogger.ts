import { isUndefined } from '@src/utils';
import * as pino from 'pino';

let logger: pino.Logger;

export function getPinoLogger(name: string, level: string): pino.Logger {
  if (isUndefined(logger)) {
    logger = pino.default({
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

  return logger;
}
