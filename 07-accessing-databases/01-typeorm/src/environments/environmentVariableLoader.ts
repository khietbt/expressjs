import { getApplicationLogger } from '@src/configurations/utils';
import { getAbsolutePath } from '@src/utils';
import { configDotenv } from 'dotenv';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { EnvironmentVariables } from './enums';
import { getEnvironmentVariable } from './utils';

export const environmentVariableLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const runningEnvironment: string = getEnvironmentVariable(EnvironmentVariables.NODE_ENV);
  const configurationFile = getAbsolutePath(`.env.${runningEnvironment}`);

  configDotenv({ path: configurationFile });

  getApplicationLogger().info(`Loaded enivronment variables from ${configurationFile}`);
};
