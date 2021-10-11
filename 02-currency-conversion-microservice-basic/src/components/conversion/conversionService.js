class ConversionService {
  getConversion = async ({ from, to, quanity, conversionMultiple }) => ({
    from,
    to,
    quanity,
    conversionMultiple,
    totalCalculatedAmount: quanity * conversionMultiple,
  });
}

module.exports = ConversionService;
