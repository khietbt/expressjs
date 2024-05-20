import { type ExceptionCode } from './types';

export interface IException {
  code: ExceptionCode;

  message: string;
}
