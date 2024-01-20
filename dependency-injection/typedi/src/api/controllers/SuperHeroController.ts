import { SuperHeroService } from '@src/api/services';
import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';

@JsonController('/super-heroes')
@Service()
export class SuperHeroController {
  constructor(private superHeroService: SuperHeroService) {}

  @Get()
  async getAll() {
    return this.superHeroService.getAll();
  }
}
