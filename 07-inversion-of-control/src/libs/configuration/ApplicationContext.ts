import { getAbsolutePath } from '@src/libs/utils';
import { configDotenv } from 'dotenv';
import { Service } from 'typedi';
import { EnvironmentVariables, getEnvironmentVariable } from '../environment';

@Service()
export class ApplicationContext {
  public constructor() {
    const runningEnvironment: string = getEnvironmentVariable(EnvironmentVariables.NODE_ENV);
    const configurationFile = getAbsolutePath(`.env.${runningEnvironment}`);

    configDotenv({ path: configurationFile });
  }
}
