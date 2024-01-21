import { Avengers2Service } from '@services/Avengers2Service';
import { ISuperHeroService } from '@services/ISuperHeroService';
import { Get, JsonController } from 'routing-controllers';
import { autoInjectable, delay, inject } from 'tsyringe';

@autoInjectable()
@JsonController('/super-heroes')
export class SuperHeroController {
  constructor(@inject(delay(() => Avengers2Service)) private superHeroService: ISuperHeroService) {}

  @Get()
  async getAll(): Promise<any> {
    return this.superHeroService.getAll();
  }
}
