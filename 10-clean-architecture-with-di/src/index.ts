import 'reflect-metadata';

import { DataSourceInitializer, LoggerInitializer, type Initializer } from './initializers';
import { container } from 'tsyringe';
import { Logger } from './libs/logger';
import express, { Router } from 'express';
import { getApplicationRoutePrefix, getApplicationPort } from './libs/utils/environmentUtils';
import { UserRouter } from './modules/user/presentation';

const initializers: Initializer[] = [new LoggerInitializer(), new DataSourceInitializer()];

const startServer = async (): Promise<void> => {
  for (const initializer of initializers) {
    await initializer.run();
  }

  const logger = container.resolve(Logger);

  const application = express();

  const v1Router = Router();

  const userRouter = container.resolve(UserRouter);

  v1Router.use('/users', userRouter.toRouter());

  application.use(getApplicationRoutePrefix(), v1Router);

  const port = getApplicationPort();

  application.listen(port, () => {
    console.log(`Listening at ${port}`);
  });

  logger.info('FINISHED');
};

startServer().catch((_e) => {});
