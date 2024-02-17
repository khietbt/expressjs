import dotenv from 'dotenv';
import express, { type Express, type Request, type Response } from 'express';
import { getApplicationPort } from './modules/environments';
import { type Logger } from './modules/loggers';
import { getApplicationLogger } from './modules/environments/getApplicationLogger';

dotenv.config();

const app: Express = express();
const port = getApplicationPort();

const log: Logger = getApplicationLogger();

app.get('/', (_req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  log.info(`Started listening on ${port}`);
});
