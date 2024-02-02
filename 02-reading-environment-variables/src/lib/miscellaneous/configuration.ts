import { EnvironmentUtils } from '@lib/utils';
import * as _package from '@topdir/package.json';
import dotenv from 'dotenv';
import path from 'path';

import { EnvironmentConstants, EnvironmentVariableConstants } from '../constants';

const pkg: any = _package as any;

// Gets the current running environment.
const getRunningEnvironment = () => EnvironmentUtils.getEnvironmentVariable(EnvironmentVariableConstants.NODE_ENV);

// Loads all variables from the specific environment file.
dotenv.config({
  path: path.join(process.cwd(), `.env.${getRunningEnvironment()}`)
});

// Gets the application port.
const getApplicationPort = () => EnvironmentUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_PORT);

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
    port: getApplicationPort()
  }
};
