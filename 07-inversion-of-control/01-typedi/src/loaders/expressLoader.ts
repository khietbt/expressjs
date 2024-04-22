import { type Configuration } from '@src/modules';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { createExpressServer } from 'routing-controllers';
import { getLogger } from './utils/getLogger';
import { getConfiguration, setExpress } from './utils';
import { type Express } from 'express';

export const expressLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration: Configuration = getConfiguration();

  const express = createExpressServer(configuration.application) as Express;

  if (!configuration.isTest) {
    const port = configuration.application.port;

    express.listen(port, () => {
      getLogger().error(`Started listening on ${port}`);
    });
  }

  setExpress(express);
};
