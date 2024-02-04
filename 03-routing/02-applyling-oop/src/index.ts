import { ApiController, SuperHeroController } from '@src/controllers';
import bodyParser from 'body-parser';
import express, { Express } from 'express';

import { configuration } from './miscellaneous';

const app: Express = express();
const { port } = configuration.application;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const controllers: ApiController[] = [new SuperHeroController()];

controllers.forEach((c: ApiController) => app.use(c.path, c.router));

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
