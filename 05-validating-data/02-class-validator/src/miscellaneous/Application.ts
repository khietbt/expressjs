import {
  getApplicationControllers,
  getApplicationLogger,
  getApplicationMiddlewares,
  getApplicationPort
} from '@src/modules/environments';
import { getApplicationRoutePrefix } from '@src/modules/environments/applicationUtils/getApplicationRoutePrefix';
import { isTest } from '@src/modules/environments/applicationUtils/isTest';
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
