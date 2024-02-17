import { ConversionUtils, ObjectUtils, PathUtils } from '@src/utils';
import * as pkg from '@topdir/package.json';
import * as dotenv from 'dotenv';

import { EnvironmentVariable } from './EnvironmentVariable';
import { EnvironmentVariableUtils } from './EnvironmentVariableUtils';
import { InvalidApplicationPortException } from './InvalidApplicationPortException';
import { NodeEnvironment } from './NodeEnvironment';

export class ApplicationContext {
  private constructor() {
    dotenv.config({
      path: PathUtils.getAbsolutePath(`.env.${this.getRunningEnvironment()}`)
    });
  }

  private static _instance?: ApplicationContext = undefined;

  public static get instance(): ApplicationContext {
    if (ObjectUtils.isUndefined(this._instance)) {
      this._instance = new ApplicationContext();
    }

    return this._instance!;
  }

  private getApplicationPort = (): number => {
    const s = EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariable.APPLICATION_PORT);

    const p = ConversionUtils.toInteger(s);

    if (p < 1 || p > 65535) {
      throw new InvalidApplicationPortException(p);
    }

    return p;
  };

  private getRunningEnvironment = (): string =>
    EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariable.NODE_ENV);

  private getApplicationLogLevel = (): string =>
    EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariable.APPLICATION_LOG_LEVEL);

  private getApplicationControllers = (): string[] =>
    PathUtils.getAbsolutePaths(
      EnvironmentVariableUtils.getEnvironmentVariableAsArray(EnvironmentVariable.APPLICATION_CONTROLLERS)
    );

  private getApplicationMiddelwares = (): string[] =>
    PathUtils.getAbsolutePaths(
      EnvironmentVariableUtils.getEnvironmentVariableAsArray(EnvironmentVariable.APPLICATION_MIDDLEWARES)
    );

  private getApplicationRoutePrefix = (): string =>
    EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariable.APPLICATION_ROUTE_PREFIX);

  private getApplicationLoggerType = (): string =>
    EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariable.APPLICATION_LOGGER_TYPE);

  private getApplicationRouterDir = (): string =>
    EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariable.APPLICATION_ROUTER_DIR);

  public get application(): any {
    return {
      runningEnvironment: this.getRunningEnvironment(),
      isDevelopment: this.getRunningEnvironment() === NodeEnvironment.DEVELOPMENT,
      isLocal: this.getRunningEnvironment() === NodeEnvironment.LOCAL,
      isProduction: this.getRunningEnvironment() === NodeEnvironment.PRODUCTION,
      isTest: this.getRunningEnvironment() === NodeEnvironment.TEST,

      name: pkg.name,
      port: this.getApplicationPort(),
      logLevel: this.getApplicationLogLevel(),
      loggerType: this.getApplicationLoggerType(),
      routerDir: this.getApplicationRouterDir(),
      routePrefix: this.getApplicationRoutePrefix(),
      controllers: this.getApplicationControllers(),
      middlewares2: this.getApplicationMiddelwares()
    };
  }
}
