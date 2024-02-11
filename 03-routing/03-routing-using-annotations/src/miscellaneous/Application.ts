import { Log } from '@src/loggers';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

import { ApplicationContext } from './ApplicationContext';

export class Application {
  public static run() {
    const { controllers, routePrefix, port, isTest } = ApplicationContext.getInstance().getProperties();

    useContainer(Container);

    const server = createExpressServer({ controllers, routePrefix });

    if (!isTest) {
      server.listen(port, () => {
        const log = Log.getLogger(__filename);

        log.error(`Started listening on ${port}`);
      });
    }
  }
}
