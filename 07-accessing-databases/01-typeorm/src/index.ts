import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework';
import { configurationLoader } from './configurations';
import { environmentVariableLoader } from './environments';

bootstrapMicroframework({
  loaders: [environmentVariableLoader, configurationLoader]
})
  .then((_microframework) => {})
  .catch((error) => {
    console.error('Application is crashed due to an error: ' + error);
  });
