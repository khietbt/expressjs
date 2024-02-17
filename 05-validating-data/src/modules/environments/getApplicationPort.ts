import { toInteger } from '@src/utils';
import { EnvironmentVariable } from './EnvironmentVariable';
import { getEnvironmentVariable } from './environmentUtils';
import { InvalidApplicationPortException } from './InvalidApplicationPortException';

export function getApplicationPort(): number {
  const s = getEnvironmentVariable(EnvironmentVariable.APPLICATION_PORT);

  const p = toInteger(s);

  if (p < 1 || p > 65535) {
    throw new InvalidApplicationPortException(p);
  }

  return p;
}
