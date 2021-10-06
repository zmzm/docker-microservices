module.exports = {
  up: (queryInterface) =>
    queryInterface.bulkInsert('exchange', [
      {
        from: 'USD',
        to: 'BYN',
        conversionMultiple: 2.5,
      },
      {
        from: 'BYN',
        to: 'USD',
        conversionMultiple: 0.25,
      },
    ]),

  down: (queryInterface) => queryInterface.bulkDelete('exchange', null, {}),
};
