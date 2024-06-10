import { toInteger } from '@src/libs/utils';
import { getEnvironmentVariable, EnvironmentVariables } from '@src/libs/environment';

export function getApplicationPort(): number {
  const s = getEnvironmentVariable(EnvironmentVariables.APPLICATION_PORT);

  const p = toInteger(s);

  return p;
}
