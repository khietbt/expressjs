import { type HttpStatus } from '../types';
import { type IException } from './IException';

export interface IHttpException extends IException {
  httpStatus: HttpStatus;
}
