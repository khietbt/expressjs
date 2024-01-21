import 'reflect-metadata';

import { configuration } from '@lib/miscellaneous';
import { createExpressServer } from 'routing-controllers';

// useContainer(new TSyringeAdapter());

const app = createExpressServer({
  controllers: configuration.application.controllers,
  routePrefix: configuration.application.routePrefix
});

app.listen(configuration.application.port, () => {
  console.log(`Running at the port ${configuration.application.port}`);
});
