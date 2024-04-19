import { Modules } from '@src/modules';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { getConfiguration } from './utils';
import { getLogger } from '@src/modules/logger';

export const loggerLoader: MicroframeworkLoader = (settings?: MicroframeworkSettings) => {
  const configuration = getConfiguration(settings);
  const logger = getLogger(configuration.application.name, configuration.application.logLevel);

  settings?.setData(Modules.LOGGER, logger);
};
