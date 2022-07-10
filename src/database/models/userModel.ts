import {
  DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute,
} from 'sequelize';

import db from '../instantiate'

class UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
  declare id: CreationOptional<number>;
  declare name: string;
}

UserModel.init(
  {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
    }
  },
  {
    tableName: 'Users',
    sequelize: db.sequelize,
    timestamps: false,
  }
);

export default UserModel