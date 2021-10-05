const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Currency extends Model {}

Currency.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    currencyType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'currency',
    timestamps: false,
  }
);

module.exports = Currency;
