'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dog extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Dog.init({
    nev: DataTypes.STRING,
    eletkor: DataTypes.INTEGER,
    fajta: DataTypes.STRING,
    gazda_neve: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Dog',
  });
  return Dog;
};