import { EnvironmentVariables, getEnvironmentVariable } from '@src/libs/environment';

export function getDatabaseType(): string {
  return getEnvironmentVariable(EnvironmentVariables.DATABASE_TYPE);
}
