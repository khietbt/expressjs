import { ApplicationContext } from '@src/miscellaneous';
import { LogUtils, ObjectUtils } from '@src/utils';
import * as pino from 'pino';
import * as pretty from 'pino-pretty';

import { Base } from './Base';
import { Logger } from './Logger';

export class Pino extends Base implements Logger {
  private static _log: any;

  private static log(): any {
    if (ObjectUtils.isUndefined(this._log)) {
      this._log = pino.default(
        {
          level: ApplicationContext.getInstance().getProperties().logLevel
        },
        pretty.default()
      );
    }

    return this._log;
  }

  public constructor(filepath?: string) {
    super(LogUtils.parsePathToScope(filepath || ApplicationContext.getInstance().getProperties().name));
  }

  public debug(message: string, ...args: any[]): void {
    Pino.log().debug(this.formattedMessage(message), ...args);
  }

  public trace(message: string, ...args: any[]): void {
    Pino.log().trace(this.formattedMessage(message), ...args);
  }

  public info(message: string, ...args: any[]): void {
    Pino.log().info(this.formattedMessage(message), ...args);
  }

  public warn(message: string, ...args: any[]): void {
    Pino.log().warn(this.formattedMessage(message), ...args);
  }

  public error(message: string, ...args: any[]): void {
    Pino.log().error(this.formattedMessage(message), ...args);
  }

  public fatal(message: string, ...args: any[]): void {
    Pino.log().fatal(this.formattedMessage(message), ...args);
  }
}
