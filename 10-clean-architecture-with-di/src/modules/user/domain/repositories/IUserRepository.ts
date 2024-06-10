import { type Nullable } from '@src/libs/types';
import { type User, type UserId } from '../types';

export interface IUserRepository {
  getAll: () => Promise<User[]>;

  getOne: (id: UserId) => Promise<Nullable<User>>;
}
