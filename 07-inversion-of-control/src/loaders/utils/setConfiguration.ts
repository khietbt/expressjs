import { Configuration } from '@src/modules';
import Container from 'typedi';

export function setConfiguration(configuration: Configuration): void {
  Container.set(Configuration, configuration);
}
