import { type Configuration, Modules } from '@src/modules';
import Container from 'typedi';

export function setConfiguration(configuration: Configuration): void {
  Container.set(Modules.CONFIGURATION, configuration);
}
