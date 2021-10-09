const ConversionService = require('./conversionService');

class ConversionController {
  constructor() {
    this.conversionService = new ConversionService();
  }

  getConversion = async (req, res) => {
    const { from, to, quanity } = req.params;
    const result = await this.conversionService.getConversion({
      from,
      to,
      quanity,
    });

    res.status(200).json(result);
  };
}

module.exports = ConversionController;
