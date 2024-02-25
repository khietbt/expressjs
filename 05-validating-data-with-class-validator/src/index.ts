import 'reflect-metadata';
import { loadConfigurationFile } from '@src/modules/environments';
import { Application } from './miscellaneous';

loadConfigurationFile();

new Application().run();
