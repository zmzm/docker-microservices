const Exchange = require('./exchange.js');

class ExchangeDAL {
  async retrieveExchange(from, to) {
    try {
      const exchange = await Exchange.findOne({
        where: { from, to },
      });

      return exchange;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = ExchangeDAL;
