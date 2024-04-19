import { type Configuration, Modules } from '@src/modules';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { createExpressServer } from 'routing-controllers';
import { getLogger } from './utils/getLogger';

export const expressApplicationLoader: MicroframeworkLoader = (settings?: MicroframeworkSettings) => {
  const configuration: Configuration = settings?.getData(Modules.CONFIGURATION);

  if (settings === undefined || configuration === undefined) {
    return;
  }

  const expressApplication = createExpressServer(configuration.application);

  if (!configuration.isTest) {
    const port = configuration.application.port;

    expressApplication.listen(port, () => {
      getLogger(settings).error(`Started listening on ${port}`);
    });
  }

  settings.setData(Modules.APPLICATION, expressApplication);
};
