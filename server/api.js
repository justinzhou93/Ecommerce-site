'use strict'; // eslint-disable-line semi

require('APP/db')
const api = module.exports = require('express').Router() // eslint-disable-line new-cap

api
  .use('/auth', require('./api/auth'))
  .use('/users', require('./api/users'))
  // .use('/products', require('./api/products'))
  // .use('/orders', require('./api/orders'))
  //UNCOMMENT WHEN COMMIT

// No routes matched? 404.
api.use((req, res) => res.status(404).end())
