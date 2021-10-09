const Exchange = require('../database/models/exchange');

class ExchangeDAL {
  retrieveExchange = async (from, to) => {
    try {
      const exchange = await Exchange.findOne({
        where: { from, to },
      });

      return exchange;
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = ExchangeDAL;
