import { AvengerService, SuperHeroService } from '@src/services';
import { Get, JsonController, Param } from 'routing-controllers';
import { Service } from 'typedi';

@JsonController('/super-heroes')
@Service()
export class SuperHeroController {
  private superHeroService: SuperHeroService = new AvengerService();

  @Get('/')
  public async getAll(): Promise<any> {
    return this.superHeroService.getAll();
  }

  @Get('/:id')
  public async getById(@Param('id') id: number): Promise<any> {
    return this.superHeroService.getById(id);
  }
}
