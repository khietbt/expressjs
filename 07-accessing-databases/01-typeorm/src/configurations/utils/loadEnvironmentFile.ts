import { configDotenv } from 'dotenv';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';

export function loadConfigurationFile(): void {
  const configurationFile = `.env.${getApplicationRunningEnvironment()}`;

  configDotenv({ path: configurationFile });
}
