import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { getConfiguration, setLogger } from './utils';
import { PinoLogger } from '@src/modules/logger/PinoLogger';

export const loggerLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration = getConfiguration();
  const logger = new PinoLogger(configuration.application.name, configuration.application.logLevel);

  setLogger(logger);
};
