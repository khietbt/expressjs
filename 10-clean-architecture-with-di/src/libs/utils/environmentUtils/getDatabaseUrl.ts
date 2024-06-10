import { EnvironmentVariables, getEnvironmentVariable } from '@src/libs/environment';

export function getDatabaseUrl(): string {
  return getEnvironmentVariable(EnvironmentVariables.DATABASE_URL);
}
