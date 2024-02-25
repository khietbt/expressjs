import { type User } from '@src/models';
import { Get, JsonController } from 'routing-controllers';

@JsonController('/users')
export class UserController {
  private readonly users: User[] = [{ id: 1, name: 'khietbt', email: 'khietbt@gmail.com' }];

  @Get()
  public async getAll(): Promise<User[]> {
    return this.users;
  }
}
