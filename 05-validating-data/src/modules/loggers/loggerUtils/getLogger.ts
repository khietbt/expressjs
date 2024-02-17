import { type Logger } from '../Logger';
import { PinoLogger } from '../PinoLogger';

export function getLogger(level: string): Logger {
  return new PinoLogger(level);
}
