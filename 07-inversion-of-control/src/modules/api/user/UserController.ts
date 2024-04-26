import { Body, Delete, Get, JsonController, Param, Patch, Post } from 'routing-controllers';
import { Service } from 'typedi';
import { UserService } from './UserService';
import { StringConstants } from '@src/constants';
import { UserEntity } from './UserEntity';
import { toOmitted } from '@src/entities';

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
  // update
  // updateMany

  @Post()
  public async create(@Body() user: Partial<UserEntity>): Promise<unknown> {
    return await this.userService.create(toOmitted(user));
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
  public async update(@Param('id') id: string, @Body() patch: Partial<UserEntity>): Promise<unknown> {
    return await this.userService.update(id, toOmitted(patch));
  }
}
