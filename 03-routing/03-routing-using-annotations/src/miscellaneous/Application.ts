import { createExpressServer } from 'routing-controllers';

import { configuration } from './configuration';
import { Logger } from './Logger';

const log = new Logger(__filename);

export class Application {
  public static run() {
    const { controllers, routePrefix, port } = configuration.application;

    const server = createExpressServer({ controllers, routePrefix });

    if (!configuration.isTest) {
      server.listen(port, () => {
        log.info(`Started listening on port '${port}'`);
      });
    }
  }
}
