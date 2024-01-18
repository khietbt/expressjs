import { ObjectConstants } from '../constants';

const isNull = (o: any): boolean => {
  return o === ObjectConstants.NULL;
};

const isNullOrUndefined = (o: any): boolean => {
  return !!o;
};

const isUndefined = (o: any): boolean => {
  return o === ObjectConstants.UNDEFINED;
};

export const ObjectUtils = {
  isNull,
  isNullOrUndefined,
  isUndefined
};
