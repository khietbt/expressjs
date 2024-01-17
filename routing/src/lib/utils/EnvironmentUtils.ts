import { EnvironmentConstants, EnvironmentVariableConstants } from '../constants';
import { ObjectUtils } from './ObjectUtils';

const getApplicationPort = (): number => {
  const s = getEnvironmentVariable(EnvironmentVariableConstants.APPLICATION_PORT);
  const applicationPort = parseInt(s);

  if (isNaN(applicationPort) || applicationPort <= 0) {
    throw new Error(`The environment variable APPLICATION_PORT '${s}' is invalid`);
  }

  return applicationPort;
};

const getEnvironmentVariable = (key: string): string => {
  const value = process.env[key];

  if (ObjectUtils.isUndefined(value)) {
    throw new Error(`Could not find the environment variable '${key}'`);
  }

  return value as string;
};

const getEnvironmentVariableAsArray = (key: string, delimiter = ',') => {
  const value = getOptionalEnvironmentVariable(key);

  return (value && value.split(delimiter)) || [];
};

const getOptionalEnvironmentVariable = (key: string): string | undefined => process.env[key];

const getRunningEnvironment = (): string => getEnvironmentVariable(EnvironmentVariableConstants.NODE_ENV);

const isDevelopment = (): boolean => getRunningEnvironment() === EnvironmentConstants.LOCAL;

const isLocal = (): boolean => getRunningEnvironment() === EnvironmentConstants.LOCAL;

const isProduction = (): boolean => getRunningEnvironment() === EnvironmentConstants.PRODUCTION;

const isTest = (): boolean => getRunningEnvironment() === EnvironmentConstants.TEST;

export const EnvironmentUtils = {
  getApplicationPort,
  getEnvironmentVariable,
  getEnvironmentVariableAsArray,
  getOptionalEnvironmentVariable,
  getRunningEnvironment,
  isDevelopment,
  isLocal,
  isProduction,
  isTest
};
