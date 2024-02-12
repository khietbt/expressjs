import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

import { ApplicationContext } from './configurations';
import { Log } from './loggers';
import { RouterUtils } from './utils/RouterUtils';

const { application } = ApplicationContext.instance.configuration;
const app: Express = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Binds all routes
const routers = RouterUtils.loadRouters(application.routePrefix, application.routerDir);
Object.keys(routers).forEach((k) => app.use(k, routers[k]));

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(application.port, () => {
  const log = Log.getLogger(__filename);
  log.info(`Server is running at http://localhost:${application.port}`);
});
