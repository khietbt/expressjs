import 'reflect-metadata';

import { configuration } from '@lib/miscellaneous';
import { HelloWorldController } from '@src/controllers/HelloWorldController';
import { createExpressServer } from 'routing-controllers';

const app = createExpressServer({
  controllers: [HelloWorldController]
});

app.listen(configuration.application.port, () => {
  console.log(`Running at the port ${configuration.application.port}`);
});
