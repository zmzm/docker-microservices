const express = require('express');
const ConversionController = require('./conversionController');

const conversionRoute = express.Router();
const conversionController = new ConversionController();

conversionRoute.get(
  '/from/:from/to/:to/quanity/:quanity',
  conversionController.getConversion
);

module.exports = conversionRoute;
