import { ObjectConstants, StringConstants } from '../constants';

export class ObjectUtils {
  public static isNull(o: any): boolean {
    return o === ObjectConstants.NULL;
  }

  public static isNullOrUndefined(o: any): boolean {
    return !o;
  }

  public static isUndefined(o: any): boolean {
    return o === ObjectConstants.UNDEFINED;
  }

  public static isFunction(o: any): boolean {
    return typeof o === StringConstants.FUNCTION;
  }
}
