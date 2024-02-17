import { Log, Logger } from '@src/loggers';
import { ObjectUtils } from '@src/utils';
import { Body, Get, JsonController, Param, Post } from 'routing-controllers';
import { Service } from 'typedi';

import { UserCreationRequest } from './UserCreationRequest';
import { UserNotFoundException } from './UserNotFoundException';
import { UserResponse } from './UserResponse';

@JsonController('/users')
@Service()
export class UserController {
  private readonly log: Logger = Log.getLogger(__filename);
  private readonly users: UserResponse[] = [{ id: 1, name: 'khietbt', email: 'khietbt@gmail.com' }];

  @Get()
  public async getAll(): Promise<any> {
    return this.users;
  }

  @Get('/:id')
  public async getById(@Param('id') id: number): Promise<any> {
    const user = this.users.find((u) => u.id === id);

    if (ObjectUtils.isUndefined(user)) {
      throw new UserNotFoundException(id);
    }

    return user!;
  }

  @Post()
  public async create(@Body() userCreationRequest: UserCreationRequest): Promise<any> {
    this.log.debug(`Processing an UserCreationRequest ${userCreationRequest}`);

    const user: UserResponse = {
      id: this.users.length + 1,
      ...userCreationRequest
    };

    this.users.push(user);

    return user;
  }
}
