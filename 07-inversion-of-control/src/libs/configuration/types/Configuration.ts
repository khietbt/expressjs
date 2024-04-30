export class Configuration {
  runningEnvironment: string;

  isDevelopment: boolean;
  isLocal: boolean;
  isProduction: boolean;
  isStaging: boolean;
  isTest: boolean;

  application: {
    name: string;
    version: string;
    port: number;

    logLevel: string;

    controllers: string[];
    defaultErrorHandler: boolean;
    middlewares: string[];
    routePrefix: string;
  };

  database: {
    entities: string[];
    logging: boolean;
    migrations: string[];
    subscribers: string[];
    synchronize: boolean;
    type: string;
    url: string;
  };
}
