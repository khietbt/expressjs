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
  isDevelopment,
  isLocal,
  isProduction,
  isStaging,
  isTest
} from '@src/modules/configuration';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import Container from 'typedi';

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
    }
  };

  Container.set(Configuration, configuration);
};
