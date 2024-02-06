import { SuperHeroModel } from '@src/models';
import { AvengerRepository } from '@src/repositories';
import { SuperHeroService } from '@src/services';
import { ObjectUtils } from '@src/utils';

export class AvengerService implements SuperHeroService {
  private readonly avengerRepository: AvengerRepository;

  public constructor() {
    this.avengerRepository = new AvengerRepository();
  }

  async getAll(): Promise<SuperHeroModel[]> {
    return this.avengerRepository.getAll();
  }

  async getById(id: number): Promise<SuperHeroModel> {
    const member = await this.avengerRepository.getById(id);

    if (ObjectUtils.isUndefined(member)) {
      throw new Error(`Avenger (id=${id}) not found`);
    }

    return member!;
  }
}
