import { EnvironmentVariables, getEnvironmentVariable, getEnvironmentVariableAsArray } from '@src/libs/environment';
import { getAbsolutePaths, toBoolean } from '@src/libs/utils';
import { getDatabaseEntities, getDatabaseType, getDatabaseUrl } from '@src/libs/utils/environmentUtils';
import { DataSource, type DataSourceOptions } from 'typeorm';

const options = {
  entities: getDatabaseEntities(),
  logging: toBoolean(getEnvironmentVariable(EnvironmentVariables.DATABASE_LOGGING)),
  migrations: getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_MIGRATIONS)),
  subscribers: getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_SUBCRIBERS)),
  synchronize: toBoolean(getEnvironmentVariable(EnvironmentVariables.DATABASE_SYNCHRONIZE)),
  type: getDatabaseType(),
  url: getDatabaseUrl()
};

const typeOrmDataSource = new DataSource(options as unknown as DataSourceOptions);

typeOrmDataSource.initialize().catch((_e) => {
  console.error(_e);
  throw new Error(`Couldn't access databse`);
});

export { typeOrmDataSource };
