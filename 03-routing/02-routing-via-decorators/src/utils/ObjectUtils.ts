import { ObjectConstants, StringConstants } from '@src/constants';

export class ObjectUtils {
  public static isFunction = (o: any): boolean => typeof o === StringConstants.FUNCTION;

  public static isNull = (o: any): boolean => o === ObjectConstants.NULL;

  public static isNullOrUndefined = (o: any): boolean => !o;

  public static isUndefined = (o: any): boolean => o === ObjectConstants.UNDEFINED;
}
