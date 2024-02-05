import 'reflect-metadata';

import { createExpressServer } from 'routing-controllers';

import { SuperHeroController } from './controllers';
import { configuration } from './miscellaneous';

createExpressServer({
  controllers: [SuperHeroController],
  routePrefix: configuration.application.routePrefix
}).listen(configuration.application.port, () => {
  console.log(`Running at the port ${configuration.application.port}`);
});
