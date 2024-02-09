import { StringConstants } from '@src/constants';
import * as path from 'path';
import * as pino from 'pino';
import * as pretty from 'pino-pretty';

import { configuration } from './configuration';

const logger = pino.default(
  {
    level: configuration.application.logLevel
  },
  pretty.default()
);

export class Logger {
  public static DEFAULT_SCOPE = configuration.application.name;
  private readonly scope: string;

  constructor(scope?: string) {
    this.scope = Logger.parsePathToScope(scope ? scope : Logger.DEFAULT_SCOPE);
  }

  private static parsePathToScope(filepath: string): string {
    if (filepath.indexOf(path.sep) >= 0) {
      filepath = filepath.replace(process.cwd(), StringConstants.EMPTY);
      filepath = filepath.replace(`${path.sep}src${path.sep}`, StringConstants.EMPTY);
      filepath = filepath.replace(`${path.sep}dist${path.sep}`, StringConstants.EMPTY);
      filepath = filepath.replace('.ts', StringConstants.EMPTY);
      filepath = filepath.replace('.js', StringConstants.EMPTY);
      filepath = filepath.replace(path.sep, StringConstants.COLON);
    }
    return filepath;
  }

  public debug = (message: string, ...args: any[]): void => logger.debug(this.formattedMessage(message), args);

  public trace = (message: string, ...args: any[]): void => logger.trace(this.formattedMessage(message), args);

  public info = (message: string, ...args: any[]): void => logger.info(this.formattedMessage(message), args);

  public warn = (message: string, ...args: any[]): void => logger.warn(this.formattedMessage(message), args);

  public error = (message: string, ...args: any[]): void => logger.error(this.formattedMessage(message), args);

  public fatal = (message: string, ...args: any[]): void => logger.fatal(this.formattedMessage(message), args);

  private formattedMessage = (message: string): string => `[${this.scope}] ${message}`;
}
