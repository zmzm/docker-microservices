module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('currency', [
      {
        currencyType: 'USD',
      },
      {
        currencyType: 'EUR',
      },
      {
        currencyType: 'BYN',
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('currency', null, {}),
};
