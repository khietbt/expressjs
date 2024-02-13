import bodyParser from 'body-parser';
import express, { Express } from 'express';

import { ApplicationContext } from './configurations';
import { Log } from './loggers';
import { RouterUtils } from './utils/RouterUtils';

const { application } = ApplicationContext.instance;
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Binds all routes
Object.entries(RouterUtils.loadRouters(application.routePrefix, application.routerDir)).forEach(([k, v]) =>
  app.use(k, v)
);

// Starts listening
app.listen(application.port, () => {
  const log = Log.getLogger(__filename);
  log.info(`Server is running at http://localhost:${application.port}`);
});
