import express, { type Express } from 'express';
import { loadConfigurationFile, getApplicationLogger, getApplicationPort } from '../environments';
import { type Logger } from '../loggers';
import { userRouter } from '@src/api/routers/userRouter';
import bodyParser from 'body-parser';

export class Application {
  private readonly log: Logger;
  public constructor() {
    loadConfigurationFile();

    this.log = getApplicationLogger();
  }

  public run(): void {
    const app: Express = express();
    const port = getApplicationPort();

    app.use(bodyParser.json());

    app.use('/users', userRouter);

    app.listen(port, () => {
      this.log.info(`Started listening on ${port}`);
    });
  }
}
