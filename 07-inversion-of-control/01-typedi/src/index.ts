import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework';
import { configurationLoader, environmentLoader, applicationLoader, loggerLoader } from './loaders';

bootstrapMicroframework({
  config: {
    showBootstrapTime: true,
    bootstrapTimeout: 10
  },
  loaders: [environmentLoader, configurationLoader, loggerLoader, applicationLoader]
}).catch((error) => {
  console.error('Application is crashed due to an error: ' + error);
});
