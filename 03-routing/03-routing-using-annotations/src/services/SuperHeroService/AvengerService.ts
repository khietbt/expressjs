import { SuperHeroModel } from '../../models';
import { AvengerRepository } from '../../repositories';
import { SuperHeroService } from '../../services';
import { ObjectUtils } from '../../utils';

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
