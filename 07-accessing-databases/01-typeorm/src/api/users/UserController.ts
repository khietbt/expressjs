import { type User } from '@src/models';
import { Body, Get, JsonController, Post, Param } from 'routing-controllers';
import { UserCreationRequest } from './UserCreationRequest';
import { type UserCreationResponse } from './UserCreationResponse';
import { type UserDetailResponse } from './UserDetailResponse';
import { isUndefined } from '@src/utils';
import { UserNotFoundException } from './UserNotFoundException';

@JsonController('/users')
export class UserController {
  private readonly users: User[] = [{ id: 1, name: 'khietbt', email: 'khietbt@gmail.com' }];

  @Get()
  public async getAll(): Promise<User[]> {
    return this.users;
  }

  @Get('/:id')
  public async getById(@Param('id') id: number): Promise<UserDetailResponse> {
    const user = this.users.find((u) => u.id === id);

    if (isUndefined(user)) {
      throw new UserNotFoundException(id);
    }

    return user as UserDetailResponse;
  }

  @Post()
  public async create(@Body() request: UserCreationRequest): Promise<UserCreationResponse> {
    const user: User = {
      id: this.users.length + 1,
      ...request
    };

    this.users.push(user);

    return user;
  }
}
