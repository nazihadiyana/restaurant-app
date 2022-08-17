'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  food.init({
    food_name: DataTypes.STRING,
    food_price: DataTypes.STRING,
    food_desc: DataTypes.STRING,
    food_src: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'food',
  });
  return food;
};