import {
  getApplicationControllers,
  getApplicationMiddlewares,
  getApplicationRoutePrefix,
  isTest,
  getApplicationPort,
  getApplicationLogger
} from '@src/configurations';
import { createExpressServer } from 'routing-controllers';

export class Application {
  public run(): void {
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
