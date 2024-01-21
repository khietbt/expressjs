import { ObjectConstants } from '../constants';

function isNull(o: any) {
  return o === ObjectConstants.NULL;
}

function isNullOrUndefined(o: any) {
  return !o;
}

function isUndefined(o: any) {
  return o === ObjectConstants.UNDEFINED;
}

export const ObjectUtils = {
  isNull,
  isNullOrUndefined,
  isUndefined
};
