import { EnvironmentConstants, EnvironmentVariableConstants } from '@lib/constants';
import { ConversionUtils, EnvironmentUtils } from '@lib/utils';
import * as _package from '@topdir/package.json';
import dotenv from 'dotenv';
import path from 'path';

const pkg: any = _package as any;

dotenv.config({
  path: path.join(process.cwd(), `.env.${getRunningEnvironment()}`)
});

function getRunningEnvironment(): string {
  return EnvironmentUtils.getEnvironmentVariable(EnvironmentVariableConstants.NODE_ENV);
}

function getApplicationPort(): number {
  const s: string = EnvironmentUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_PORT);

  const p: number = ConversionUtils.toNumber(s);

  if (p <= 0) {
    throw new Error(`Application port must be an integer`);
  }

  return p;
}

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
