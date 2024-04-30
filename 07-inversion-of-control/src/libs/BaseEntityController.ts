import { Body, Delete, Get, Param, Patch, Post } from 'routing-controllers';
import { type BaseEntityService } from './BaseEntityService';
import { type BaseEntity } from './entities';
import { StringConstants } from './constants';
import { Service } from 'typedi';

@Service()
export abstract class BaseEntityController<T extends BaseEntity> {
  public constructor(private readonly service: BaseEntityService<T>) {}

  @Delete('/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})')
  public async delete(@Param('id') id: string): Promise<unknown> {
    return await this.service.delete(id);
  }

  @Delete(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  public async deleteMany(@Param('ids') ids: string): Promise<unknown> {
    return await this.service.deleteMany(ids.split(StringConstants.COMMA));
  }

  // getList

  @Post()
  public async create(@Body() user: Partial<T>): Promise<unknown> {
    return await this.service.create(user);
  }

  @Get()
  public async getAllUsers(): Promise<unknown> {
    return await this.service.getAll();
  }

  @Get('/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})')
  public async getOne(@Param('id') id: string): Promise<unknown> {
    return await this.service.getOne(id);
  }

  @Get(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  public async getMany(@Param('ids') ids: string): Promise<unknown> {
    return await this.service.getMany(ids.split(StringConstants.COMMA));
  }

  @Patch('/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})')
  /**
   * Updates one entity of type T
   * @param id The ID of the entity to update
   * @param changes The changes to apply
   * @returns A promise that resolves to the updated entity or null if no entity was found
   */
  public async update(@Param('id') id: string, @Body() changes: Partial<T>): Promise<unknown> {
    return await this.service.update(id, changes);
  }

  @Patch(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  /**
   * Updates many entities of type T
   * @param ids The IDs of the entities to update, separated by commas
   * @param changes The changes to apply
   * @returns A promise that resolves to the updated entities or null if no entity was found
   */
  @Patch(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  public async updateMany(@Param('ids') ids: string, @Body() changes: Partial<T>): Promise<unknown> {
    return await this.service.updateMany(ids.split(StringConstants.COMMA), changes);
  }
}
