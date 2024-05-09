import 'reflect-metadata';

import { DataSourceInitializer, LoggerInitializer, type Initializer } from './initializers';
import { container } from 'tsyringe';
import { DataSource } from 'typeorm';
import { Logger } from './libs';

const initializers: Initializer[] = [new LoggerInitializer(), new DataSourceInitializer()];

const startServer = async (): Promise<void> => {
  for (const initializer of initializers) {
    await initializer.run();
  }

  const dataSource = container.resolve(DataSource);
  const logger = container.resolve(Logger);

  const users = await dataSource.createEntityManager().query('SELECT * FROM users');

  users.forEach((user: unknown) => {
    logger.info(JSON.stringify(user));
  });
};

startServer().catch((_e) => {});
