import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';
import { UserService } from '../services/UserService';
import { Logger } from '../../logger';

@Service()
@JsonController('/users')
export class UserController {
  public constructor(
    private readonly userService: UserService,
    private readonly logger: Logger
  ) {}

  @Get()
  public async getAllUsers(): Promise<unknown> {
    this.logger.info('abc');
    return await this.userService.getAll();
  }
}
