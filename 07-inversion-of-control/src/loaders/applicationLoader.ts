import { Application } from '@src/libs/application';
import { Configuration } from '@src/libs/configuration';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import Container from 'typedi';

export const applicationLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration: Configuration = Container.get(Configuration);

  const application = new Application(configuration);

  application.run();

  Container.set(Application, application);
};
