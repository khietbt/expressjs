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
  isTest
} from './utils';
import { getApplicationVersion } from './utils/getApplicationVersion';

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
