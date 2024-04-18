import { getEnvironmentVariable, EnvironmentVariables } from '@src/environments';
import { toInteger } from '@src/utils';
import { InvalidApplicationPortException } from '../exceptions';

export function getApplicationPort(): number {
  const s = getEnvironmentVariable(EnvironmentVariables.APPLICATION_PORT);

  const p = toInteger(s);

  if (p < 1 || p > 65535) {
    throw new InvalidApplicationPortException(p);
  }

  return p;
}
