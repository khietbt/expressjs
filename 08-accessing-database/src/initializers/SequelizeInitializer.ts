import { Sequelize } from 'sequelize';
import { Initializer } from './Initializer';
import { getDatabaseEntities, getDatabaseUrl } from '../libs/utils/environmentUtils';
import { glob } from 'glob';

export class SequelizeInitializer extends Initializer {
  public async run(): Promise<void> {
    const sequelize = new Sequelize(getDatabaseUrl());

    await sequelize.authenticate();

    const entityFiles = await glob(getDatabaseEntities());

    for (const entityFile of entityFiles) {
      const imported = await import(entityFile);

       console.log(imported);
    }
  }
}
