const express = require('express');
const helmet = require('helmet');
const conversionRoutes = require('./components/conversion/conversionRoutes');
const limiter = require('./rateLimit');

require('dotenv').config();

const app = express();

app.use(limiter);
app.use(helmet());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ healthCheck: true });
});
app.get('/favicon.ico', (req, res) => res.status(204).end());
app.use('/api/currency-conversion', conversionRoutes);

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use((err, req, res) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.render('error');
});

module.exports = app;
