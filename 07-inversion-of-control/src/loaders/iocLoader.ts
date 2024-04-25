import { type MicroframeworkLoader, type MicroframeworkSettings } from 'microframework';
import { useContainer } from 'routing-controllers';
import Container from 'typedi';

export const iocLoader: MicroframeworkLoader = (_settings?: MicroframeworkSettings) => {
  useContainer(Container);
};
