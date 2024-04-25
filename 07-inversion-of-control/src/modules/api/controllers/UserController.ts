import { Get, JsonController } from 'routing-controllers';
import { Inject, Service } from 'typedi';
import { UserService } from '../services/UserService';

@Service()
@JsonController('/users')
export class UserController {
  public constructor(@Inject(() => UserService) private readonly userService: UserService) {}

  @Get()
  public async getAllUsers(): Promise<unknown> {
    return await this.userService.getAll();
  }
}
