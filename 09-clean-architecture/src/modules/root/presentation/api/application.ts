import express from 'express';
import { v1Router } from './v1Router';
import { getApplicationPort } from '@src/libs/utils/environmentUtils';

const application = express();

application.use('/api/v1', v1Router);

const port = getApplicationPort();

application.listen(port, () => {
  console.log(`Listening at ${port}`);
});
