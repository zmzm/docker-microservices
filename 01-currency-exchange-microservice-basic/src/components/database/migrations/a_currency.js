module.exports = {
  up: async (queryInterface, DataTypes) => {
    await queryInterface.createTable('currency', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      currencyType: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
    });
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('currency');
  },
};
