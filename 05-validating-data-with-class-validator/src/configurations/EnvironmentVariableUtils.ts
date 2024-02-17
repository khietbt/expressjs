import { StringConstants } from '@src/constants';
import { ObjectUtils } from '@src/utils';
import * as process from 'process';

import { EnvironmentVariable } from './EnvironmentVariable';
import { EnvironmentVariableNotFoundException } from './EnvironmentVariableNotFoundException';

export class EnvironmentVariableUtils {
  public static getEnvironmentVariable(k: EnvironmentVariable): string {
    const v = this.getOptionalEnvironmentVariable(k);

    if (ObjectUtils.isUndefined(v)) {
      throw new EnvironmentVariableNotFoundException(k);
    }

    return v as string;
  }

  public static getOptionalEnvironmentVariable = (k: EnvironmentVariable): string | undefined =>
    process.env[EnvironmentVariable[k]];

  public static getEnvironmentVariableAsArray = (
    k: EnvironmentVariable,
    separator: string = StringConstants.COMMA
  ): string[] => {
    const v = this.getOptionalEnvironmentVariable(k);

    return (v && v.split(separator)) || [];
  };
}
