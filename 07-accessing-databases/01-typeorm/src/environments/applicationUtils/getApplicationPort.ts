import { toInteger } from '@src/utils';
import { EnvironmentVariables } from '../EnvironmentVariables';
import { InvalidApplicationPortException } from '../InvalidApplicationPortException';
import { getEnvironmentVariable } from '../environmentVariableUtils';

export function getApplicationPort(): number {
  const s = getEnvironmentVariable(EnvironmentVariables.APPLICATION_PORT);

  const p = toInteger(s);

  if (p < 1 || p > 65535) {
    throw new InvalidApplicationPortException(p);
  }

  return p;
}
