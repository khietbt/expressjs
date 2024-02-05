// import { ApiController } from '@src/controllers';
// import express from 'express';
// import { createExpressServer } from 'routing-controllers';

// export class Application {
//   private readonly controllers: ApiController[];
//   private readonly port: number;
//   private application: express.Application;

//   public constructor(controllers: ApiController[], port: number) {
//     this.controllers = controllers;
//     this.port = port;
//     this.application = createExpressServer({
//       controllers: controllers
//     });
//   }

//   public run() {
//     this.initializeRoutes();

//     this.application.listen(this.port, () => {
//       console.log(`"Listening on the port ${this.port}"`);
//     });
//   }
// }
export {};
