const { Model, DataTypes } = require('sequelize');

const sequelize = require('../database');

class Exchange extends Model {}

Exchange.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    from: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    to: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    conversionMultiple: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'exchange',
    timestamps: false,
  }
);

module.exports = Exchange;
