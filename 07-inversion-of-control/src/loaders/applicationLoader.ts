import { Application } from '@src/modules/application';
import { Configuration } from '@src/modules/configuration';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import Container from 'typedi';

export const applicationLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration: Configuration = Container.get(Configuration);

  const application = new Application(configuration);

  application.run();

  Container.set(Application, application);
};
