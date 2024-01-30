import { EnvironmentConstants, EnvironmentVariableConstants } from '@lib/constants';
import { EnvironmentUtils } from '@lib/utils';
import * as _package from '@topdir/package.json';
import dotenv from 'dotenv';
import path from 'path';

const pkg: any = _package as any;

const getRunningEnvironment = () => EnvironmentUtils.getEnvironmentVariable(EnvironmentVariableConstants.NODE_ENV);

dotenv.config({
  path: path.join(process.cwd(), `.env.${getRunningEnvironment()}`)
});

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
