import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { getConfiguration, setLogger } from './utils';
import { getLogger } from '@src/modules/logger';

export const loggerLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration = getConfiguration();
  const logger = getLogger(configuration.application.name, configuration.application.logLevel);

  setLogger(logger);
};
