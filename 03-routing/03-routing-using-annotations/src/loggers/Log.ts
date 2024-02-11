import { ApplicationContext } from '@src/miscellaneous';

import { Logger } from './Logger';
import { LoggerType } from './LoggerType';
import { Pino } from './Pino';

export class Log {
  public static getLogger(scope: string): Logger {
    const { loggerType } = ApplicationContext.getInstance().getProperties();

    if (loggerType === LoggerType.PINO) {
      return new Pino(scope);
    }

    throw new Error('Logger type ${loggerType} is not supported');
  }
}
