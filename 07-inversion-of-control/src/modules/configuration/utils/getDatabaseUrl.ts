import { EnvironmentVariables, getEnvironmentVariable } from '@src/modules/environment';

export function getDatabaseUrl(): string {
  return getEnvironmentVariable(EnvironmentVariables.DATABASE_URL);
}
