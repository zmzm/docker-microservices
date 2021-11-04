const axios = require('axios').default;
const ConversionService = require('./conversionService');

class ConversionController {
  constructor() {
    this.conversionService = new ConversionService();
  }

  getExchange = async (from, to) => {
    try {
      const response = await axios.get(
        `${process.env.CURRENCY_EXCHANGE_SERVICE_HOST}/api/currency-exchange/from/${from}/to/${to}`
      );
      return response.data;
    } catch (err) {
      console.error(err);
    }
  };

  getConversion = async (req, res) => {
    const { from, to, quanity } = req.params;
    const { conversionMultiple } = await this.getExchange(from, to);
    const result = await this.conversionService.getConversion({
      from,
      to,
      quanity,
      conversionMultiple,
    });

    res.status(200).json(result);
  };
}

module.exports = ConversionController;
