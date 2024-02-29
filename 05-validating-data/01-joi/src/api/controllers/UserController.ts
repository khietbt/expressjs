import { type User } from '@src/models';
import { type UserCreationRequest } from '../requests/UserCreationRequest';

export class UserController {
  private readonly users: User[] = [
    { id: 1, name: 'Zeus' },
    { id: 2, name: 'Poseidon' },
    { id: 3, name: 'Hera' }
  ];

  public getAll = (): User[] => this.users;

  public create = (userCreationRequest: UserCreationRequest): User => {
    const user: User = { id: this.users.length + 1, name: userCreationRequest.name };

    return user;
  };
}
