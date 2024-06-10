import { isNull } from './isNull';
import { isUndefined } from './isUndefined';

export function isNullOrUndefined(value: unknown): boolean {
  return isNull(value) || isUndefined(value);
}
