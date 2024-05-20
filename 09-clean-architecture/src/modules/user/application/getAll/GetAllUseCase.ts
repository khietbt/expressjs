import { type IUseCase } from '@src/shared';
import { type GetAllResponse } from './GetAllResponse';
import { type GetAllRequest } from './GetAllRequest';
import { type IUserRepository } from '../../domain';

import { UserConverter } from './converters';
export class GetAllUseCase implements IUseCase<GetAllRequest, GetAllResponse> {
  public constructor(private readonly userRepository: IUserRepository) {}

  public async execute(_request?: GetAllRequest): Promise<GetAllResponse> {
    const users = await this.userRepository.getAll();

    return users.map((u) => new UserConverter().to(u));
  }
}
