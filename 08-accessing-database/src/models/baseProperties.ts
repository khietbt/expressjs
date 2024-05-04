import { DataTypes } from "sequelize";

export const baseProperties = {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  }
}
