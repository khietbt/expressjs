import { EnvironmentVariables, getEnvironmentVariable } from '@src/modules/environment';

export function getDatabaseType(): string {
  return getEnvironmentVariable(EnvironmentVariables.DATABASE_TYPE);
}
