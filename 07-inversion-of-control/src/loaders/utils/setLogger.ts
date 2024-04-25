import { Modules } from '@src/modules';
import { type Logger } from '@src/modules/logger';
import Container from 'typedi';

export function setLogger(logger: Logger): void {
  Container.set(Modules.LOGGER, logger);
}
