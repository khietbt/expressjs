import { Modules } from '@src/modules';
import Container from 'typedi';

export function getApplication(): Express.Application {
  return Container.get(Modules.APPLICATION);
}
