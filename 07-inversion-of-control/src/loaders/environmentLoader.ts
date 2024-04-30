import { EnvironmentVariables, getEnvironmentVariable } from '@src/libs/environment';
import { getAbsolutePath } from '@src/libs/utils';
import { configDotenv } from 'dotenv';
import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';

export const environmentLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  const runningEnvironment: string = getEnvironmentVariable(EnvironmentVariables.NODE_ENV);
  const configurationFile = getAbsolutePath(`.env.${runningEnvironment}`);

  configDotenv({ path: configurationFile });
};
