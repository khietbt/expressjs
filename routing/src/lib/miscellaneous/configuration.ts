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

function getOsPath(k: string): string {
  return getPath(EnvironmentUtils.getEnvironmentVariable(k));
}

function getOsPaths(k: string): string[] {
  return getPaths(EnvironmentUtils.getEnvironmentVariableAsArray(k));
}

function isProduction() {
  return getRunningEnvironment() === EnvironmentConstants.PRODUCTION;
}

function getPath(p: string): string {
  return isProduction()
    ? path.join(process.cwd(), p.replace('src/', 'dist/').slice(0, -3) + '.js')
    : path.join(process.cwd(), p);
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
    controllers: getApplicationControllers(),
    routePrefix: getApplicationRoutePrefix()
  }
};
