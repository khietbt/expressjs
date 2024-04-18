import {
  getApplicationControllers,
  getApplicationLogLevel,
  getApplicationMiddlewares,
  getApplicationName,
  getApplicationPort,
  getApplicationRoutePrefix,
  getApplicationRunningEnvironment,
  isDevelopment,
  isLocal,
  isProduction,
  isStaging,
  isTest,
  loadConfigurationFile
} from './utils';
import { getApplicationVersion } from './utils/getApplicationVersion';

loadConfigurationFile();

export const configuration = {
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
