import { Configuration } from '@src/modules/configuration';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import Container from 'typedi';
import { DataSource, type DataSourceOptions } from 'typeorm';

export const dataSourceLoader: MicroframeworkLoader = async (_settings?: MicroframeworkSettings) => {
  const configuration = Container.get(Configuration);

  const dataSource = new DataSource(configuration.database as unknown as DataSourceOptions);

  await dataSource.initialize();

  Container.set(DataSource, dataSource);
};
