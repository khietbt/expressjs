import { configDotenv } from 'dotenv';
import { getApplicationRunningEnvironment } from './getApplicationRunningEnvironment';
import { getApplicationLogger } from './getApplicationLogger';

export function loadConfigurationFile(): void {
  const configurationFile = `.env.${getApplicationRunningEnvironment()}`;

  configDotenv({ path: configurationFile });

  getApplicationLogger().info(`Loaded configurations from ${configurationFile}`);
}
