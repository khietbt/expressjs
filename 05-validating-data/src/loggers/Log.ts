import { ApplicationContext } from '@src/configurations';

import { Logger } from './Logger';
import { LoggerType } from './LoggerType';
import { LogUtils } from './LogUtils';
import { Pino } from './Pino';

export class Log {
  public static getLogger(filepath?: string): Logger {
    const { application } = ApplicationContext.instance;
    const scope = LogUtils.parsePathToScope(filepath || application.name);

    if (application.loggerType === LoggerType.PINO) {
      return new Pino(scope);
    }

    throw new Error('Logger type ${application.loggerType} is not supported');
  }
}
