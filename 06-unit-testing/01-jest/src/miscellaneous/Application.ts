import {
  getApplicationControllers,
  getApplicationLogger,
  getApplicationMiddlewares,
  getApplicationPort,
  getApplicationRoutePrefix,
  isTest
} from '@src/modules/environments';
import { createExpressServer } from 'routing-controllers';

export class Application {
  public async run(): Promise<void> {
    const server = createExpressServer({
      controllers: getApplicationControllers(),
      defaultErrorHandler: false,
      middlewares: getApplicationMiddlewares(),
      routePrefix: getApplicationRoutePrefix()
    });

    if (!isTest()) {
      server.listen(getApplicationPort(), () => {
        getApplicationLogger().info(`Started listening on ${getApplicationPort()}`);
      });
    }
  }
}
