import { ApplicationContext } from '@src/configurations';
import { Log, Logger } from '@src/loggers';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

export class Application {
  private log: Logger = Log.getLogger(__filename);

  public async run() {
    const { application } = ApplicationContext.instance;

    useContainer(Container);

    const server = createExpressServer({
      ...application,
      defaultErrorHandler: false,
      middlewares: application.middlewares2
    });

    if (!application.isTest) {
      server.listen(application.port, () => {
        this.log.info(`Started listening on ${application.port}`);
      });
    }
  }
}
