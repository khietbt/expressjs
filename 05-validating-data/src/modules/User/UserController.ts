import { ObjectUtils } from '@src/utils';
import { Get, JsonController, Param } from 'routing-controllers';
import { Service } from 'typedi';

import { UserNotFoundException } from './UserNotFoundException';
import { UserResponse } from './UserResponse';

@JsonController('/users')
@Service()
export class UserController {
  private readonly users: UserResponse[] = [{ id: 1, name: 'khietbt' }];
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
}
