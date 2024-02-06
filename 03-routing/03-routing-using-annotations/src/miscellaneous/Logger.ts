import path from 'path';

enum LogLevel {
  SILLY = 'silly',
  DEBUG = 'debug',
  TRACE = 'trace',
  INFO = 'info',
  WARN = 'warn',
  ERROR = 'error',
  FATAL = 'fatal'
}

export class Logger {
  public static DEFAULT_SCOPE = 'app';
  private readonly scope: string;

  constructor(scope?: string) {
    this.scope = Logger.parsePathToScope(scope ? scope : Logger.DEFAULT_SCOPE);
  }

  private static parsePathToScope(filepath: string): string {
    if (filepath.indexOf(path.sep) >= 0) {
      filepath = filepath.replace(process.cwd(), '');
      filepath = filepath.replace(`${path.sep}src${path.sep}`, '');
      filepath = filepath.replace(`${path.sep}dist${path.sep}`, '');
      filepath = filepath.replace('.ts', '');
      filepath = filepath.replace('.js', '');
      filepath = filepath.replace(path.sep, ':');
    }
    return filepath;
  }

  public silly = (message: string, ...args: any[]): void => this.log(LogLevel.SILLY, message, args);

  public debug = (message: string, ...args: any[]): void => this.log(LogLevel.DEBUG, message, args);

  public trace = (message: string, ...args: any[]): void => this.log(LogLevel.TRACE, message, args);

  public info = (message: string, ...args: any[]): void => this.log(LogLevel.INFO, message, args);

  public warn = (message: string, ...args: any[]): void => this.log(LogLevel.WARN, message, args);

  public error = (message: string, ...args: any[]): void => this.log(LogLevel.ERROR, message, args);

  public fatal = (message: string, ...args: any[]): void => this.log(LogLevel.FATAL, message, args);

  private log = (level: string, message: string, args: any[]): void =>
    console.log(`${this.formatScope()} ${level} ${message}`, args);

  private formatScope = (): string => `[${this.scope}]`;
}
