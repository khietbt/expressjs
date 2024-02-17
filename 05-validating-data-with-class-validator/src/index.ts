import 'reflect-metadata';
require('express-async-errors');

import { Application } from './miscellanenous/Application';

(async () => await new Application().run())();
