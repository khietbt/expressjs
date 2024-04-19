import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
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
  isTest
} from './utils';
import { Modules } from '@src/enums';
import { type Configuration } from './types';

export const configurationLoader: MicroframeworkLoader = (settings?: MicroframeworkSettings) => {
  if (settings !== undefined) {
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
  }
};
