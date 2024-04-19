import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework';
import { configurationLoader, environmentLoader, expressApplicationLoader } from './loaders';

bootstrapMicroframework({
  loaders: [environmentLoader, configurationLoader, expressApplicationLoader]
})
  .then((_microframework) => {})
  .catch((error) => {
    console.error('Application is crashed due to an error: ' + error);
  });
