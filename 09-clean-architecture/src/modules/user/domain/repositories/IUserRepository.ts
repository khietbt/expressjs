import { type User } from '../types';

export interface IUserRepository {
  getAll: () => Promise<User[]>;
}
