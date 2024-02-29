import { type Logger } from '../Logger';
import { PinoLogger } from '../PinoLogger';

export function getLogger(applicationName: string, applicationLogLevel: string): Logger {
  return new PinoLogger(applicationName, applicationLogLevel);
}
