import 'reflect-metadata';
import { getApplicationLogger, loadConfigurationFile } from '@src/modules/environments';
import { Application } from './miscellaneous';

// Always run first
loadConfigurationFile();

new Application()
  .run()
  .then(() => {
    getApplicationLogger().info('Started running application');
  })
  .catch((error) => {
    getApplicationLogger().error(`Application crashed ${error.message}`);
  });
