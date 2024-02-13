import { EnvironmentConstants, EnvironmentVariableConstants } from '@src/constants';
import { InvalidApplicationPortException } from '@src/exceptions';
import { ConversionUtils, EnvironmentVariableUtils, ObjectUtils, PathUtils } from '@src/utils';
import * as dotenv from 'dotenv';
import * as path from 'path';

import * as _package from '../../package.json';

export class ApplicationContext {
  private static instance?: ApplicationContext = undefined;

  private constructor() {
    dotenv.config({
      path: path.join(process.cwd(), `.env.${this.getRunningEnvironment()}`)
    });
  }

  public static getInstance(): ApplicationContext {
    if (ObjectUtils.isUndefined(ApplicationContext.instance)) {
      ApplicationContext.instance = new ApplicationContext();
    }

    return ApplicationContext.instance!;
  }

  private getRunningEnvironment(): string {
    return EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariableConstants.NODE_ENV);
  }

  private getControllers(): string[] {
    const controllers: string[] = EnvironmentVariableUtils.getEnvironmentVariableAsArray(
      EnvironmentVariableConstants.APPLICATION_CONTROLLERS
    );

    return PathUtils.getAbsolutePaths(controllers);
  }

  private getLogLevel(): string {
    return (
      EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_LOG_LEVEL) || 'info'
    );
  }

  private getRoutePrefix() {
    return (
      EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_ROUTE_PREFIX) || 'info'
    );
  }

  private getPort(): number {
    const s = EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_PORT);

    const p = ConversionUtils.toInteger(s);

    if (p < 1 || p > 65535) {
      throw new InvalidApplicationPortException(p);
    }

    return p;
  }

  public getProperties(): any {
    return {
      controllers: this.getControllers(),
      description: _package.description,
      isDevelopment: this.getRunningEnvironment() === EnvironmentConstants.DEVELOPMENT,
      isLocal: this.getRunningEnvironment() === EnvironmentConstants.LOCAL,
      isProduction: this.getRunningEnvironment() === EnvironmentConstants.PRODUCTION,
      isTest: this.getRunningEnvironment() === EnvironmentConstants.TEST,
      logLevel: this.getLogLevel(),
      loggerType: EnvironmentVariableUtils.getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_LOGGER_TYPE),
      name: _package.name,
      port: this.getPort(),
      routePrefix: this.getRoutePrefix(),
      runningEnvironment: this.getRunningEnvironment(),
      version: _package.version
    };
  }
}
