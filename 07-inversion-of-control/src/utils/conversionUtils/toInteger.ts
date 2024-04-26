import { InvalidNumberConversionException } from './InvalidNumberConversionException';

export function toInteger(s: string): number {
  if (!/^-?\d+$/.test(s)) {
    throw new InvalidNumberConversionException(s);
  }

  return parseInt(s);
}
