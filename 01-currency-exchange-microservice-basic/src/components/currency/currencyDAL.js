const Currency = require('./currency.js');

class CurrencyDAL {
  async getByType(type) {
    try {
      const currency = await Currency.findOne({
        where: { type },
      });

      return currency;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = CurrencyDAL;
