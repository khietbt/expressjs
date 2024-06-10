import { container } from 'tsyringe';
import { Initializer } from './Initializer';
import { getApplicationLogLevel, getApplicationName } from '../libs/utils/environmentUtils';
import { Logger } from '@src/libs/logger';

export class LoggerInitializer extends Initializer {
  public async run(): Promise<void> {
    const logger = new Logger(getApplicationName(), getApplicationLogLevel());

    container.register<Logger>(Logger, { useValue: logger });
  }
}
