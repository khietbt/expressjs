import { BaseEntity, Omitted } from '@src/entities';
import { DeepPartial, FindOptionsWhere, In, Repository } from 'typeorm';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

export abstract class EntityService<T extends BaseEntity> {
  public constructor(protected readonly repository: Repository<T>) { }

  public async create(t: Omitted<Partial<T>>): Promise<T> {
    return await this.repository.save(t as DeepPartial<T>);
  }

  public async getAll(): Promise<T[]> {
    return await this.repository.find();
  }

  public async getOne(id: string): Promise<T | null> {
    return this.repository.findOneBy({ id } as FindOptionsWhere<T>);
  }

  public async getMany(ids: string[]): Promise<T[]> {
    return this.repository.findBy({ id: In(ids) } as FindOptionsWhere<T>);
  }

  public async update(id: string, changes: Omitted<Partial<T>>): Promise<unknown> {
    return await this.repository.update({ id } as FindOptionsWhere<T>, changes as QueryDeepPartialEntity<T>);
  }

  public async updateMany(ids: string[], changes: Omitted<Partial<T>>): Promise<unknown> {
    return await this.repository.update({ id: In(ids) } as FindOptionsWhere<T>, changes as QueryDeepPartialEntity<T>);
  }

  
  public async delete(id: string): Promise<unknown> {
    return await this.repository.softDelete({ id } as FindOptionsWhere<T>);
  }

  public async deleteMany(ids: string[]): Promise<unknown> {
    return await this.repository.softDelete({ id: In(ids) } as FindOptionsWhere<T>);
  }
}