import * as pino from 'pino';
import { getCallSite } from '../utils';
import { type ILogger } from './ILogger';

export class Logger implements ILogger {
  private readonly logger: pino.Logger;

  public constructor(
    private readonly name: string,
    private readonly level: string
  ) {
    this.logger = pino.default({
      level: this.level,
      timestamp: pino.stdTimeFunctions.isoTime,
      formatters: {
        level: (label, _number) => {
          return {
            level: label
          };
        },
        bindings: (_bindings) => {
          return {
            applicationName: this.name
          };
        }
      }
    });
  }

  public debug(message: string): void {
    this.getPinoLogger().debug(this.formattedMessage(message));
  }

  public trace(message: string): void {
    this.getPinoLogger().trace(this.formattedMessage(message));
  }

  public info(message: string): void {
    this.getPinoLogger().info(this.formattedMessage(message));
  }

  public warn(message: string): void {
    this.getPinoLogger().warn(this.formattedMessage(message));
  }

  public error(message: string): void {
    this.getPinoLogger().error(this.formattedMessage(message));
  }

  public fatal(message: string): void {
    this.getPinoLogger().fatal(this.formattedMessage(message));
  }

  protected formattedMessage(message: string): string {
    return `${message}`;
  }

  private getPinoLogger(): pino.Logger {
    return this.logger.child(this.getChildLevel());
  }

  protected getChildLevel(): { file: string; line: number } {
    const callSite = getCallSite(4);

    return {
      file: callSite.getFileName().replace(process.cwd(), '.'),
      line: callSite.getLineNumber()
    };
  }
}
