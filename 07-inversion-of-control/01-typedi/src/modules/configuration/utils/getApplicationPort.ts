import { toInteger } from '@src/utils';
import { InvalidApplicationPortException } from '../exceptions';
import { getEnvironmentVariable, EnvironmentVariables } from '@src/modules/environment';

export function getApplicationPort(): number {
  const s = getEnvironmentVariable(EnvironmentVariables.APPLICATION_PORT);

  const p = toInteger(s);

  if (p < 1 || p > 65535) {
    throw new InvalidApplicationPortException(p);
  }

  return p;
}
