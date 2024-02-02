import { EnvironmentVariableNotFoundException } from '@lib/exceptions';
import { ObjectUtils } from '@lib/utils';
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
