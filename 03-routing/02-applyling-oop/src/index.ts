import { ApiController, SuperHeroController } from '@src/controllers';

import { Application, configuration } from './miscellaneous';

const { port } = configuration.application;

const controllers: ApiController[] = [new SuperHeroController()];

const application = new Application(controllers, port);

application.run();
