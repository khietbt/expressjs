import 'reflect-metadata';
import { loadConfigurationFile } from './environments';
import { Application } from './miscellaneous';

loadConfigurationFile();

new Application().run();
