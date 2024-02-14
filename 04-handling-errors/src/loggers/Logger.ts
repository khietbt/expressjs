export interface Logger {
  debug(message: string, ...args: any[]): void;

  trace(message: string, ...args: any[]): void;

  info(message: string, ...args: any[]): void;

  warn(message: string, ...args: any[]): void;

  error(message: string, ...args: any[]): void;

  fatal(message: string, ...args: any[]): void;
}
