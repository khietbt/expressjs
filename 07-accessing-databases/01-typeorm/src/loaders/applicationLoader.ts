import { type Configuration, Modules } from '@src/modules';
import express, { type Express } from 'express';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';

export const expressApplicationLoader: MicroframeworkLoader = (settings?: MicroframeworkSettings) => {
  const configuration: Configuration = settings?.getData(Modules.CONFIGURATION);

  if (settings === undefined || configuration === undefined) {
    return;
  }

  const expressApplication: Express = express();

  expressApplication.listen(configuration.application.port, () => {
    console.log(`Server is listening at the port ${configuration.application.port}`);
  });

  settings.setData(Modules.APPLICATION, expressApplication);
};
