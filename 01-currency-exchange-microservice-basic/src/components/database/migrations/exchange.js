module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('exchange', {
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
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('exchange');
  },
};
