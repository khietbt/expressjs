import { toInteger } from '@src/libs/utils';
import { InvalidApplicationPortException } from '../exceptions';
import { getEnvironmentVariable, EnvironmentVariables } from '@src/libs/environment';

export function getApplicationPort(): number {
  const s = getEnvironmentVariable(EnvironmentVariables.APPLICATION_PORT);

  const p = toInteger(s);

  if (p < 1 || p > 65535) {
    throw new InvalidApplicationPortException(p);
  }

  return p;
}
