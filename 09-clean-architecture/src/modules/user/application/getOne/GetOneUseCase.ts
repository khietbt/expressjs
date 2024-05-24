import { type IUseCase } from '@src/shared';
import { type IUserRepository, UserId, UserNotFoundException } from '../../domain';
import { type GetOneRequest } from './GetOneRequest';
import { type GetOneResponse } from './GetOneResponse';

export class GetOneUseCase implements IUseCase<GetOneRequest, GetOneResponse> {
  public constructor(private readonly userRepository: IUserRepository) {}

  public async execute(request: GetOneRequest): Promise<GetOneResponse> {
    const user = await this.userRepository.getOne(new UserId(request.id));

    if (user == null) {
      throw new UserNotFoundException(request.id);
    }

    return {
      id: user.id?.value ?? '',
      name: user.name.value,
      email: user.email.value
    };
  }
}
