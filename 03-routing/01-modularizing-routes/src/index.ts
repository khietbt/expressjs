import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

import { configuration } from './miscellaneous';
import { superHeroRouter } from './routers';

const app: Express = express();
const { port } = configuration.application;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/super-heroes', superHeroRouter);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
