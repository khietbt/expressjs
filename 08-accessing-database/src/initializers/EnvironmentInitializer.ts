import { configDotenv } from 'dotenv';
import { getAbsolutePath } from '../libs';
import { type NodeEnvironment } from '../libs/environment';
import { getApplicationRunningEnvironment } from '../libs/utils/environmentUtils';
import { Initializer } from './Initializer';

export class EnvironmentInitializer extends Initializer {
  public async run(): Promise<void> {
    const runningEnvironment: NodeEnvironment = getApplicationRunningEnvironment();

    const envFile = getAbsolutePath(`.env.${runningEnvironment}`);

    configDotenv({ path: envFile });
  }
}
