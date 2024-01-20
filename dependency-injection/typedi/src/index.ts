import 'reflect-metadata';

import { configuration } from '@lib/miscellaneous';
import { createExpressServer, useContainer } from 'routing-controllers';
import { Container } from 'typedi';

useContainer(Container);

const app = createExpressServer({
  controllers: configuration.application.controllers,
  routePrefix: configuration.application.routePrefix
});

app.listen(configuration.application.port, () => {
  console.log(`Running at the port ${configuration.application.port}`);
});
