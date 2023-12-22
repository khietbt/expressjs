import dotenv from 'dotenv';
import Application from '@src/application';

dotenv.config();

const port = process.env.PORT || '2000';

const application = new Application(+port);

application.listen();
