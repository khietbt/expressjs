import 'reflect-metadata';

import { DataSourceInitializer, LoggerInitializer, type Initializer } from './initializers';
import { container } from 'tsyringe';
import { Logger } from './libs/logger';
import { DataSource } from 'typeorm';
import { type IUserRepository } from './modules/user/domain';
import { UserRepository } from './modules/user/infrastructure/database/repositories';
import { GetAllUseCase } from './modules/user/application';

const initializers: Initializer[] = [new LoggerInitializer(), new DataSourceInitializer()];

const startServer = async (): Promise<void> => {
  for (const initializer of initializers) {
    await initializer.run();
  }

  const logger = container.resolve(Logger);

  const dataSource = container.resolve(DataSource);

  const userRepository: IUserRepository = new UserRepository(dataSource);

  const getAllUseCase = new GetAllUseCase(userRepository);

  logger.info('Started');

  const users = await getAllUseCase.execute();

  users.forEach((u) => {
    logger.info(JSON.stringify(u));
  });

  logger.info('FINISHED');
};

startServer().catch((e) => {
  console.error(e);
});
