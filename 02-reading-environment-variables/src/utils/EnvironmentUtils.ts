import { EnvironmentVariableNotFoundException } from '@src/exceptions';
import { ObjectUtils } from '@src/utils/index';
import * as process from 'process';

export class EnvironmentUtils {
  public static getEnvironmentVariable = (k: string): string => {
    const v = this.getOptionalEnvironmentVariable(k);

    if (ObjectUtils.isUndefined(v)) {
      throw new EnvironmentVariableNotFoundException(k);
    }

    return v as string;
  };

  public static getOptionalEnvironmentVariable = (k: string): string | undefined => process.env[k];
}
