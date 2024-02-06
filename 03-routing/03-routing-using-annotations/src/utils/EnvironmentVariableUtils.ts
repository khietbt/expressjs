import * as process from 'process';

import { EnvironmentVariableConstants, StringConstants } from '../constants';
import { EnvironmentVariableNotFoundException } from '../exceptions';
import { ObjectUtils } from './ObjectUtils';

export class EnvironmentVariableUtils {
  public static getEnvironmentVariable(k: EnvironmentVariableConstants): string {
    const v = this.getOptionalEnvironmentVariable(k);

    if (ObjectUtils.isUndefined(v)) {
      throw new EnvironmentVariableNotFoundException(k);
    }

    return v as string;
  }

  public static getOptionalEnvironmentVariable = (k: EnvironmentVariableConstants): string | undefined =>
    process.env[EnvironmentVariableConstants[k]];

  public static getEnvironmentVariableAsArray = (
    k: EnvironmentVariableConstants,
    separator: string = StringConstants.COMMA
  ): string[] => {
    const v = this.getOptionalEnvironmentVariable(k);

    return (v && v.split(separator)) || [];
  };
}
