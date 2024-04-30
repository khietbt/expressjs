import {
  Configuration,
  getApplicationControllers,
  getApplicationLogLevel,
  getApplicationMiddlewares,
  getApplicationName,
  getApplicationPort,
  getApplicationRoutePrefix,
  getApplicationRunningEnvironment,
  getApplicationVersion,
  getDatabaseEntities,
  getDatabaseType,
  getDatabaseUrl,
  isDevelopment,
  isLocal,
  isProduction,
  isStaging,
  isTest
} from '@src/libs/configuration';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import Container from 'typedi';
import { EnvironmentVariables, getEnvironmentVariable, getEnvironmentVariableAsArray } from '@src/libs/environment';
import { getAbsolutePaths, toBoolean } from '@src/libs/utils';

export const configurationLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const configuration: Configuration = {
    runningEnvironment: getApplicationRunningEnvironment(),

    isDevelopment: isDevelopment(),
    isLocal: isLocal(),
    isProduction: isProduction(),
    isStaging: isStaging(),
    isTest: isTest(),

    application: {
      name: getApplicationName(),
      version: getApplicationVersion(),
      port: getApplicationPort(),

      logLevel: getApplicationLogLevel(),

      controllers: getApplicationControllers(),
      defaultErrorHandler: false,
      middlewares: getApplicationMiddlewares(),
      routePrefix: getApplicationRoutePrefix()
    },

    database: {
      entities: getDatabaseEntities(),
      logging: toBoolean(getEnvironmentVariable(EnvironmentVariables.DATABASE_LOGGING)),
      migrations: getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_MIGRATIONS)),
      subscribers: getAbsolutePaths(getEnvironmentVariableAsArray(EnvironmentVariables.DATABASE_SUBCRIBERS)),
      synchronize: toBoolean(getEnvironmentVariable(EnvironmentVariables.DATABASE_SYNCHRONIZE)),
      type: getDatabaseType(),
      url: getDatabaseUrl()
    }
  };

  Container.set(Configuration, configuration);
};
