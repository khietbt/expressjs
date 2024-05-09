import {registerProvider} from "@tsed/di";
import {DataSource} from "typeorm";
import {Logger} from "@tsed/logger";

export const MysqlDatasource = Symbol.for("MysqlDatasource");
export type MysqlDatasource = DataSource;
export const mysqlDatasource = new DataSource({
  type: "mysql",
  entities: [],
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test"
});


registerProvider<DataSource>({
  provide: MysqlDatasource,
  type: "typeorm:datasource",
  deps: [Logger],
  async useAsyncFactory(logger: Logger) {
    await mysqlDatasource.initialize();

    logger.info("Connected with typeorm to database: Mysql");

    return mysqlDatasource;
  },
  hooks: {
    $onDestroy(dataSource) {
      return dataSource.isInitialized && dataSource.close();
    }
  }
});
