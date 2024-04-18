import 'reflect-metadata';
import { Application } from './miscellaneous';
import { loadConfigurationFile } from './configurations';

loadConfigurationFile();

new Application().run();
