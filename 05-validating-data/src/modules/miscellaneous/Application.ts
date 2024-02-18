import express, { type Express, type Request, type Response } from 'express';
import { loadConfigurationFile, getApplicationLogger, getApplicationPort } from '../environments';
import { type Logger } from '../loggers';

export class Application {
  private readonly log: Logger;
  public constructor() {
    loadConfigurationFile();

    this.log = getApplicationLogger();
  }

  public run(): void {
    const app: Express = express();
    const port = getApplicationPort();

    app.get('/', (_req: Request, res: Response) => {
      res.send('Hello world!');
    });

    app.listen(port, () => {
      this.log.info(`Started listening on ${port}`);
    });
  }
}
