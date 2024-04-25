import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { getConfiguration } from './utils';
import Container from 'typedi';
import { Logger } from '@src/modules/logger/Logger';

export const loggerLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration = getConfiguration();

  Container.set(Logger, new Logger(configuration.application.name, configuration.application.logLevel));
};
