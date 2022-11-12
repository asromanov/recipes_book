'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Recipe.init({
    title: DataTypes.TEXT,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    time: DataTypes.TEXT,
    img: DataTypes.TEXT,
    user_id: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};