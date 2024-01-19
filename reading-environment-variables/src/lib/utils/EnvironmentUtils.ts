import * as process from 'process';

import { ObjectUtils } from './ObjectUtils';

const getEnvironmentVariable = (k: string): string => {
  const v: string | undefined = getOptionalEnvironmentVariable(k);

  if (ObjectUtils.isUndefined(v)) {
    throw new Error(`Could not find the environment variable '${k}'`);
  }

  return v as string;
};

const getOptionalEnvironmentVariable = (k: string): string | undefined => process.env[k];

const getEnvironmentVariableAsArray = (k: string, d: string): string[] => {
  const v: string | undefined = getOptionalEnvironmentVariable(k);

  return (v && v.split(d)) || [];
};

export const EnvironmentUtils = {
  getEnvironmentVariable,
  getEnvironmentVariableAsArray,
  getOptionalEnvironmentVariable
};
