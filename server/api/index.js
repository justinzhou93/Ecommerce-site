const router = require('express').Router()
console.log('hi');
router.use('/users', require('./users'))
router.use('/products', require('./products'))
router.use('/orders', require('./orders'))

module.exports = router
