import { ApplicationContext } from '@src/configurations';
import { Log, Logger } from '@src/loggers';
import { RouterUtils } from '@src/utils';
import bodyParser from 'body-parser';
import express, { Express } from 'express';
export class Application {
  private readonly application: Express = express();
  private readonly log: Logger = Log.getLogger(__filename);

  public run() {
    // Apply middlewares
    this.application.use(bodyParser.urlencoded({ extended: true }));
    this.application.use(bodyParser.json());

    // Load configuration
    const { application } = ApplicationContext.instance;

    // Bind all routes
    Object.entries(RouterUtils.loadRouters(application.routePrefix, application.routerDir)).forEach(([k, v]) =>
      this.application.use(k, v)
    );

    // Listen for requests
    this.application.listen(application.port, () => {
      this.log.info(`Started listening on ${application.port}`);
    });
  }
}
