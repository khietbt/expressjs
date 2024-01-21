import { configuration } from '@lib/miscellaneous';
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = configuration.application.port;

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
