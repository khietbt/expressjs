import 'reflect-metadata';
// import { Application } from './miscellaneous';
import { bootstrapMicroframework } from 'microframework';
import { environmentVariableLoader } from './environments';
import { getApplicationLogger, getApplicationName, getApplicationVersion } from './configurations/utils';

bootstrapMicroframework({
  loaders: [environmentVariableLoader]
})
  .then(() => {
    getApplicationLogger().error(`${getApplicationName()}@${getApplicationVersion()}`);
  })
  .catch(() => {});
