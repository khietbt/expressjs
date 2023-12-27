import express from 'express';
import bodyParser from 'body-parser';
import { BaseController } from '@src/controllers';

class Application {
  public application: express.Application;
  public controllers: BaseController[];
  public port: number;

  public constructor(controllers: BaseController[], port: number) {
    this.application = express();
    this.controllers = controllers;
    this.port = port;

    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.controllers.forEach((c) => this.application.use('/', c.getRoute()));
  }

  public listen() {
    this.application.listen(this.port, () => {});
  }

  private initializeMiddlewares() {
    this.application.use(bodyParser.json());
  }
}

export default Application;
