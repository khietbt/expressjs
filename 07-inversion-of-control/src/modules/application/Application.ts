import { createExpressServer } from 'routing-controllers';
import { type Configuration } from '../configuration';
import { type Express } from 'express';

export class Application {
  private readonly server: Express;

  public constructor(readonly configuration: Configuration) {
    this.server = createExpressServer(configuration.application);
  }

  public run(): void {
    if (!this.configuration.isTest) {
      this.server.listen(this.configuration.application.port, () => {});
    }
  }
}
