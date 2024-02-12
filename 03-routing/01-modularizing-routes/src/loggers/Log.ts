import { ApplicationContext } from '@src/configurations';
import { LogUtils } from '@src/utils';

import { Logger } from './Logger';
import { LoggerType } from './LoggerType';
import { Pino } from './Pino';

export class Log {
  public static getLogger(filepath?: string): Logger {
    const { application } = ApplicationContext.instance.configuration;
    const scope = LogUtils.parsePathToScope(filepath || application.name);

    if (application.loggerType === LoggerType.PINO) {
      return new Pino(scope);
    }

    throw new Error('Logger type ${loggerType} is not supported');
  }
}
