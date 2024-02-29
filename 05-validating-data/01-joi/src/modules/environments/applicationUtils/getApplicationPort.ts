import { toInteger } from '@src/utils';
import { EnvironmentVariable } from '../EnvironmentVariable';
import { InvalidApplicationPortException } from '../InvalidApplicationPortException';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationPort(): number {
  const s = getEnvironmentVariable(EnvironmentVariable.APPLICATION_PORT);

  const p = toInteger(s);

  if (p < 1 || p > 65535) {
    throw new InvalidApplicationPortException(p);
  }

  return p;
}
