import { type Configuration, Modules } from '@src/modules';
import Container from 'typedi';

export function getConfiguration(): Configuration {
  return Container.get<Configuration>(Modules.CONFIGURATION);
}
