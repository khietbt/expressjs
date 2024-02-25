import { getApplicationControllers, getApplicationLogger, getApplicationPort } from '@src/modules/environments';
import { getApplicationRoutePrefix } from '@src/modules/environments/applicationUtils/getApplicationRoutePrefix';
import { isTest } from '@src/modules/environments/applicationUtils/isTest';
import { createExpressServer } from 'routing-controllers';

export class Application {
  public run(): void {
    const server = createExpressServer({
      controllers: getApplicationControllers(),
      routePrefix: getApplicationRoutePrefix()
    });

    if (!isTest()) {
      server.listen(getApplicationPort(), () => {
        getApplicationLogger().info(`Started listening on ${getApplicationPort()}`);
      });
    }
  }
}
