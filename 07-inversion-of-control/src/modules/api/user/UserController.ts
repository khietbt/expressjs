import { Body, Delete, Get, JsonController, Param, Post } from 'routing-controllers';
import { Service } from 'typedi';
import { UserService } from './UserService';
import { UserCreationRequest } from './UserCreationRequest';
import { Logger } from '@src/modules/logger';
import { StringConstants } from '@src/constants';

@Service()
@JsonController('/users')
export class UserController {
  public constructor(
    private readonly userService: UserService,
    private readonly logger: Logger
  ) {}

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
  public async createUser(@Body() userCretionRequest: UserCreationRequest): Promise<unknown> {
    return await this.userService.create(userCretionRequest);
  }

  @Get()
  public async getAllUsers(): Promise<unknown> {
    return await this.userService.getAll();
  }

  @Get('/:id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})')
  public async getOne(@Param('id') id: string): Promise<unknown> {
    this.logger.info('Process getOne');
    return await this.userService.getOne(id);
  }

  @Get(
    '/:ids([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}(,[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})+)'
  )
  public async getMany(@Param('ids') ids: string): Promise<unknown> {
    this.logger.info('Process many');
    return await this.userService.getMany(ids.split(StringConstants.COMMA));
  }
}
