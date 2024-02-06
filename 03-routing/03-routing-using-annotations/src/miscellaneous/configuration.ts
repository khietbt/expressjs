import dotenv from 'dotenv';
import path from 'path';

import * as _package from '../../package.json';
import { EnvironmentConstants, EnvironmentVariableConstants } from '../constants';
import { InvalidApplicationPortException } from '../exceptions';
import { ConversionUtils, EnvironmentVariableUtils, PathUtils } from '../utils';

const pkg: any = _package as any;

// Gets the current running environment.
const getRunningEnvironment = () =>
  EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariableConstants.NODE_ENV);

// Loads all variables from the specific environment file.
dotenv.config({
  path: path.join(process.cwd(), `.env.${getRunningEnvironment()}`)
});

// Gets the application port.
const getApplicationPort = () => {
  const s = EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_PORT);

  const p = ConversionUtils.toInteger(s);

  if (p < 1 || p > 65535) {
    throw new InvalidApplicationPortException(p);
  }

  return p;
};

const getApplicationControllers = () => {
  const controllers = EnvironmentVariableUtils.getEnvironmentVariableAsArray(
    EnvironmentVariableConstants.APPLICATION_CONTROLLERS
  );

  return PathUtils.getAbsolutePaths(controllers);
};

const getApplicationRoutePrefix = () => {
  return (
    EnvironmentVariableUtils.getOptionalEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_ROUTE_PREFIX) || ''
  );
};

export const configuration = {
  environment: getRunningEnvironment(),
  isDevelopment: getRunningEnvironment() === EnvironmentConstants.DEVELOPMENT,
  isLocal: getRunningEnvironment() === EnvironmentConstants.LOCAL,
  isProduction: getRunningEnvironment() === EnvironmentConstants.PRODUCTION,
  isTest: getRunningEnvironment() === EnvironmentConstants.TEST,

  application: {
    name: pkg.name,
    version: pkg.version,
    description: pkg.description,
    port: getApplicationPort(),
    routePrefix: getApplicationRoutePrefix(),
    controllers: getApplicationControllers()
  }
};
