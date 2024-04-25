import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework';
import { configurationLoader, environmentLoader, expressLoader, loggerLoader } from './loaders';
import { iocLoader } from './loaders/iocLoader';

bootstrapMicroframework({
  config: {
    showBootstrapTime: true,
    bootstrapTimeout: 10
  },
  loaders: [environmentLoader, configurationLoader, loggerLoader, iocLoader, expressLoader]
}).catch((error) => {
  console.error('Application is crashed due to an error: ' + error);
});
