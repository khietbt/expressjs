import { configDotenv } from 'dotenv';
import { getRunningEnvironment } from './getRunningEnvironment';

export function loadConfigurationFile(): void {
  configDotenv({
    path: `.env.${getRunningEnvironment()}`
  });
}
