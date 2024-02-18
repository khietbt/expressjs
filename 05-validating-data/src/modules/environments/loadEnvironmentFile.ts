import { configDotenv } from 'dotenv';
import { getRunningEnvironment } from './getRunningEnvironment';
import { getApplicationLogger } from './getApplicationLogger';

export function loadConfigurationFile(): void {
  const configurationFile = `.env.${getRunningEnvironment()}`;

  configDotenv({
    path: configurationFile
  });

  getApplicationLogger().info(`Loaded configurations from ${configurationFile}`);
}
