import { DataTypes, type Sequelize } from 'sequelize';
import { BaseModel } from "./BaseModel";
import { baseProperties } from "./baseProperties";

export class UserModel extends BaseModel {
  declare name: string;
  declare email: string;
}

export const initializeUserModel = (sequelize: Sequelize): void => {
  UserModel.init({
    ...baseProperties,
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING
    }
  }, { sequelize, tableName: 'users' });
}
