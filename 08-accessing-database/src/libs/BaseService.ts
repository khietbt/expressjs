import { type BaseModel } from './BaseModel';
import { type BaseRepository } from './BaseRepository';

export abstract class BaseService<T extends BaseModel> {
  public constructor(protected readonly repository: BaseRepository<T>) {}

  public async getAll(): Promise<unknown> {
    return await this.repository.find();
  }
}
