const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const productRoutes = require('./api/routes/products');
const filterRoutes = require('./api/routes/filters');
const usersRoutes = require('./api/routes/users');
const ordersRoutes = require('./api/routes/orders');

mongoose.connect(
  'mongodb+srv://admin:admin@shopdb-qwlzb.mongodb.net/test?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/products', productRoutes);
app.use('/filters', filterRoutes);
app.use('/users', usersRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: { message: error.message }
  });
});

module.exports = app;
