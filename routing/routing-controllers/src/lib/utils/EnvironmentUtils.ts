import { StringConstants } from '@lib/constants';
import { EnvironmentVariableNotFoundException } from '@lib/exceptions';
import * as process from 'process';

import { ObjectUtils } from './ObjectUtils';

export class EnvironmentUtils {
  public static getEnvironmentVariable = (k: string): string => {
    const v = this.getOptionalEnvironmentVariable(k);

    if (ObjectUtils.isUndefined(v)) {
      throw new EnvironmentVariableNotFoundException(k);
    }

    return v as string;
  };

  public static getOptionalEnvironmentVariable = (k: string): string | undefined => process.env[k];

  public static getEnvironmentVariableAsArray = (k: string, separator: string = StringConstants.COMMA): string[] => {
    const v = this.getOptionalEnvironmentVariable(k);

    return (v && v.split(separator)) || [];
  };
}
