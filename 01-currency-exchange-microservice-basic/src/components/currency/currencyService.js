const CurrencyDAL = require('./currencyDAL');

class CurrencyService {
  dal = new CurrencyDAL();

  async getCurrencyByType(type) {
    const currency = this.dal.getByType(type);

    return currency;
  }
}

module.exports = CurrencyService;
