import { Modules } from '@src/modules';
import { type Logger } from '@src/modules/logger';
import Container from 'typedi';

export function getLogger(): Logger {
  return Container.get<Logger>(Modules.LOGGER);
}
