import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';
import { UserService } from './UserService';

@Service()
@JsonController('/users')
export class UserController {
  public constructor(private readonly userService: UserService) {}

  @Get()
  public async getAllUsers(): Promise<unknown> {
    return await this.userService.getAll();
  }
}
