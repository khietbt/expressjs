import { Body, Delete, Get, JsonController, Param, Patch, Post } from 'routing-controllers';
import { Service } from 'typedi';
import { UserService } from './UserService';
import { StringConstants } from '@src/libs/constants';
import { UserEntity } from './UserEntity';

@Service()
@JsonController('/users')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Delete('/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})')
  public async delete(@Param('id') id: string): Promise<unknown> {
    return await this.userService.delete(id);
  }

  @Delete(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  public async deleteMany(@Param('ids') ids: string): Promise<unknown> {
    return await this.userService.deleteMany(ids.split(StringConstants.COMMA));
  }

  // getList

  @Post()
  public async create(@Body() user: Partial<UserEntity>): Promise<unknown> {
    return await this.userService.create(user);
  }

  @Get()
  public async getAllUsers(): Promise<unknown> {
    return await this.userService.getAll();
  }

  @Get('/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})')
  public async getOne(@Param('id') id: string): Promise<unknown> {
    return await this.userService.getOne(id);
  }

  @Get(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  public async getMany(@Param('ids') ids: string): Promise<unknown> {
    return await this.userService.getMany(ids.split(StringConstants.COMMA));
  }

  @Patch('/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})')
  public async update(@Param('id') id: string, @Body() changes: Partial<UserEntity>): Promise<unknown> {
    return await this.userService.update(id, changes);
  }

  @Patch(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  public async updateMany(@Param('ids') ids: string, @Body() changes: Partial<UserEntity>): Promise<unknown> {
    return await this.userService.updateMany(ids.split(StringConstants.COMMA), changes);
  }
}
