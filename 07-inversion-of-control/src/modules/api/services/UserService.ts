import { Service } from 'typedi';

@Service()
export class UserService {
  public async getAll(): Promise<unknown> {
    return {
      a: 1,
      b: 2
    };
  }
}
