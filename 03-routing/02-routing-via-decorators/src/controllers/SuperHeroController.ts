import { SuperHeroModel } from '@src/models';
import { AvengerService, SuperHeroService } from '@src/services';
import { Get, JsonController, Param } from 'routing-controllers';
import { Inject, Service } from 'typedi';

@JsonController('/super-heroes')
@Service()
export class SuperHeroController {
  public constructor(@Inject(() => AvengerService) private superHeroService: SuperHeroService) {}

  @Get('/')
  public async getAll(): Promise<SuperHeroModel[]> {
    return this.superHeroService.getAll();
  }

  @Get('/:id')
  public async getById(@Param('id') id: number): Promise<SuperHeroModel> {
    return this.superHeroService.getById(id);
  }
}
