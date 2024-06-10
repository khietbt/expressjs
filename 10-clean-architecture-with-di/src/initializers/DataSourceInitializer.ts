import { container } from 'tsyringe';
import { DataSource, type DataSourceOptions } from 'typeorm';
import { EnvironmentVariables, getEnvironmentVariable, getEnvironmentVariableAsArray } from '../libs/environment';
import { getDatabaseEntities, getDatabaseType, getDatabaseUrl } from '../libs/utils/environmentUtils';
import { Initializer } from './Initializer';
import { toBoolean, getAbsolutePaths } from '@src/libs/utils';

export class DataSourceInitializer extends Initializer {
  public async run(): Promise<void> {
    const options = {
      entities: getDatabaseEntities(),
      logging: toBoolean(getEnvironmentVariable(EnvironmentVariables.DATABASE_LOGGING)),
      migrations: getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_MIGRATIONS)),
      subscribers: getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_SUBCRIBERS)),
      synchronize: toBoolean(getEnvironmentVariable(EnvironmentVariables.DATABASE_SYNCHRONIZE)),
      type: getDatabaseType(),
      url: getDatabaseUrl()
    };

    const dataSource = new DataSource(options as unknown as DataSourceOptions);

    await dataSource.initialize();

    container.register(DataSource, { useValue: dataSource });
  }
}
