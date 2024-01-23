import { configuration } from '@lib/miscellaneous';
import { superHeroRouter } from '@src/api/routers/superHeroRouter';
import bodyParser from 'body-parser';
import express, { Express, Request, Response } from 'express';

const func = (a: number): number => a + 2;

const app: Express = express();
const port: string = configuration.application.port;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/super-heroes', superHeroRouter);

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
