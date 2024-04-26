import { Configuration } from '@src/modules/configuration';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import Container from 'typedi';
import { DataSource } from 'typeorm';

export const dataSourceLoader: MicroframeworkLoader = async (_settings?: MicroframeworkSettings) => {
  const configuration = Container.get(Configuration);

  console.log(configuration.application.entities);

  const dataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'expressjs',
    password: 'expressjs',
    database: 'expressjs',
    synchronize: true,
    logging: true,
    entities: configuration.application.entities,
    subscribers: [],
    migrations: []
  });

  await dataSource.initialize();

  Container.set(DataSource, dataSource);
};
