import 'reflect-metadata';

import { bootstrapMicroframework } from 'microframework';
import {
  applicationLoader,
  configurationLoader,
  dataSourceLoader,
  environmentLoader,
  loggerLoader,
  routingControllersLoader
} from './loaders';

bootstrapMicroframework({
  config: {
    showBootstrapTime: true,
    bootstrapTimeout: 10
  },
  loaders: [
    environmentLoader,
    configurationLoader,
    loggerLoader,
    routingControllersLoader,
    dataSourceLoader,
    applicationLoader
  ]
}).catch((error) => {
  console.error('Application is crashed due to an error: ' + error);
});
