import { Repository } from 'typeorm';
import { type BaseModel } from './BaseModel';

export abstract class BaseRepository<T extends BaseModel> extends Repository<T> {}
