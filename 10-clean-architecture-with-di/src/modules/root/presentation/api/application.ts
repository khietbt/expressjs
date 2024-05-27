import express from 'express';
import { v1Router } from './v1Router';
import { getApplicationPort, getApplicationRoutePrefix } from '@src/libs/utils/environmentUtils';

const application = express();

application.use(getApplicationRoutePrefix(), v1Router);

const port = getApplicationPort();

application.listen(port, () => {
  console.log(`Listening at ${port}`);
});
