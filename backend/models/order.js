"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  order.init(
    {
      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "user",
            schema: "testingdb",
          },
          key: "id",
        },
      },
      food_id: {
        type: DataTypes.INTEGER,
        references: {
          model: {
            tableName: "food",
            schema: "testingdb",
          },
          key: "id",
        },
      },
      quantity: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "order",
    }
  );
  return order;
};
