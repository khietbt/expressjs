import { Logger } from '@src/modules/logger';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import Container from 'typedi';
import { Configuration } from '@src/modules/configuration';

export const loggerLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration = Container.get(Configuration);

  Container.set(Logger, new Logger(configuration.application.name, configuration.application.logLevel));
};
