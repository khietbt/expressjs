import { container } from 'tsyringe';
import { Initializer } from './Initializer';
import { Logger } from '../libs';
import { getApplicationLogLevel, getApplicationName } from '../libs/utils/environmentUtils';

export class LoggerInitializer extends Initializer {
  public async run(): Promise<void> {
    const logger = new Logger(getApplicationName(), getApplicationLogLevel());

    container.register<Logger>(Logger, { useValue: logger });
  }
}
