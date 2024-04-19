import {
  Modules,
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

export const configurationLoader: MicroframeworkLoader = (settings?: MicroframeworkSettings) => {
  if (settings === undefined) {
    return;
  }

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

  settings.setData(Modules.CONFIGURATION, configuration);
};
