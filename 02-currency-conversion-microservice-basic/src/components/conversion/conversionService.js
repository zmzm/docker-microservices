class ConversionService {
  getConversion = async ({ from, to, quanity }) => {
    const conversion = { from, to, quanity };

    return conversion;
  };
}

module.exports = ConversionService;
