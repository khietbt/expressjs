import { Modules } from '@src/modules';
import { type Logger } from '@src/modules/logger';
import { type MicroframeworkSettings } from 'microframework';

export function getLogger(settings?: MicroframeworkSettings): Logger {
  return settings?.getData(Modules.LOGGER) as Logger;
}
