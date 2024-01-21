import { EnvironmentConstants, EnvironmentVariableConstants } from '@lib/constants';
import { ConversionUtils, EnvironmentUtils } from '@lib/utils';
import * as _package from '@topdir/package.json';
import dotenv from 'dotenv';
import path from 'path';
import * as process from 'process';

const pkg: any = _package as any;

dotenv.config({
  path: path.join(process.cwd(), `.env.${getRunningEnvironment()}`)
});

function getApplicationPort(): number {
  const s: string = EnvironmentUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_PORT);

  const p: number = ConversionUtils.toNumber(s);

  if (p <= 0) {
    throw new Error(`Application port must be a positive integer`);
  }

  return p;
}

function isDevelopment() {
  return getRunningEnvironment() === EnvironmentConstants.DEVELOPMENT;
}

function isLocal() {
  return getRunningEnvironment() === EnvironmentConstants.LOCAL;
}

function isProduction() {
  return getRunningEnvironment() === EnvironmentConstants.PRODUCTION;
}

function isTest() {
  return getRunningEnvironment() === EnvironmentConstants.TEST;
}

function getOsPath(k: string): string {
  return getPath(EnvironmentUtils.getEnvironmentVariable(k));
}

function getOsPaths(k: string): string[] {
  return getPaths(EnvironmentUtils.getEnvironmentVariableAsArray(k));
}

function getRunningEnvironment(): string {
  return EnvironmentUtils.getEnvironmentVariable(EnvironmentVariableConstants.NODE_ENV);
}

function getPath(p: string): string {
  return path.join(process.cwd(), p);
}

function getPaths(paths: string[]): string[] {
  return paths.map((p: string) => getPath(p));
}

function getApplicationControllers(): string[] {
  return getOsPaths(EnvironmentVariableConstants.APPLICATION_CONTROLLERS);
}

function getApplicationRoutePrefix(): string {
  return EnvironmentUtils.getOptionalEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_ROUTE_PREFIX) || '/';
}

export const configuration = {
  application: {
    controllers: getApplicationControllers(),
    description: pkg.description,
    name: pkg.name,
    port: getApplicationPort(),
    routePrefix: getApplicationRoutePrefix(),
    version: pkg.version
  },

  environment: getRunningEnvironment(),
  isDevelopment: isDevelopment(),
  isLocal: isLocal(),
  isProduction: isProduction(),
  isTest: isTest()
};
