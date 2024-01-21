import { SuperHeroService } from '@src/api/services';
import { Get, JsonController } from 'routing-controllers';
import { Service } from 'typedi';

@Service()
@JsonController('/super-heroes')
export class SuperHeroController {
  constructor(private superHeroService: SuperHeroService) {}

  @Get()
  async getAll() {
    return this.superHeroService.getAll();
  }
}
