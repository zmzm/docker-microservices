const ExchangeDAL = require('./exchangeDAL');

class ExchandeService {
  exchangeDAL = new ExchangeDAL();

  async getExchange(from, to) {
    const exchange = this.exchangeDAL.retrieveExchange(from, to);

    return exchange;
  }
}

module.exports = ExchandeService;
