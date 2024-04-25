import { Modules } from '@src/modules';
import Container from 'typedi';
import { type Express } from 'express';

export function setExpress(express: Express): void {
  Container.set(Modules.APPLICATION, express);
}
