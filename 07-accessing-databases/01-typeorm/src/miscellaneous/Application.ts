import { configuration } from '@src/configurations';
import { getLogger } from '@src/loggers';
import { createExpressServer } from 'routing-controllers';

export class Application {
  public run(): void {
    const server = createExpressServer(configuration.application);

    if (!configuration.isTest) {
      const port = configuration.application.port;

      const logger = getLogger(configuration.application.name, configuration.application.logLevel);

      server.listen(port, () => {
        logger.info(`Started listening on ${port}`);
      });
    }
  }
}
