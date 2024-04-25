import {
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
  isTest,
  type Configuration
} from '@src/modules';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { setConfiguration } from './utils';

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

  setConfiguration(configuration);
};
