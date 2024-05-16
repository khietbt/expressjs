import 'reflect-metadata';

import { DataSourceInitializer, LoggerInitializer, type Initializer } from './initializers';
import { container } from 'tsyringe';
import { Logger } from './libs';
import { UserService } from './modules/user/UserService';
import { type UserModel } from './modules/user/UserModel';

const initializers: Initializer[] = [new LoggerInitializer(), new DataSourceInitializer()];

const startServer = async (): Promise<void> => {
  for (const initializer of initializers) {
    await initializer.run();
  }

  const logger = container.resolve(Logger);

  const userService = container.resolve(UserService);

  const users = (await userService.getAll()) as UserModel[];

  users.forEach((user: unknown) => {
    logger.info(JSON.stringify(user));
  });
  logger.info('FINISHED');
};

startServer().catch((_e) => {});
