'use strict'; // eslint-disable-line semi

const db = require('APP/db')
const User = db.model('users')
const express = require('express');
const router = express.Router();
const BillingAddress = db.model('billing_addresses');
const CreditCard = db.model('credit_cards');
const ShippingAddress = db.model('shipping_addresses');
const Reviews = db.model('review');
const Cart = db.model('Cart');

// const {mustBeLoggedIn, forbidden} = require('./auth.filters')

// module.exports = require('express').Router() // eslint-disable-line new-cap
//   .get('/', forbidden('only admins can list users'), (req, res, next) =>
//     User.findAll()
//     .then(users => res.json(users))
//     .catch(next))
//   .post('/', (req, res, next) =>
//     User.create(req.body)
//     .then(user => res.status(201).json(user))
//     .catch(next))
//   .get('/:id', mustBeLoggedIn, (req, res, next) =>
//     User.findById(req.params.id)
//     .then(user => res.json(user))
//     .catch(next))


// this is for admin use only
router.get('/', (req, res, next) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(next);
});

router.post('/:userId/billingaddress', (req, res, next) => {
  User.findById(req.params.userId)
  .then(foundUser => {
    return BillingAddress.create(req.body)
    .then(createdBillingAddress => {
      createdBillingAddress.setUser(foundUser);
    })
  })
  .catch(next);
});

router.post('/:userId/shippingaddress', (req, res, next) => {
  User.findById(req.params.userId)
  .then(foundUser => {
    return ShippingAddress.create(req.body)
    .then(createdShippingAddress => {
      createdShippingAddress.setUser(foundUser);
    })
  })
  .catch(next);
});

router.post('/:userId/creditcard', (req, res, next) => {
  User.findById(req.params.userId)
  .then(foundUser => {
    return CreditCard.create(req.body)
    .then(createdCreditCard => {
      createdCreditCard.setUser(foundUser);
    })
  })
  .catch(next);
});

router.get('/:userId', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.userId
    },
    include: [
      {model: BillingAddress, where: {user_id: req.params.userId}},
      {model: CreditCard, where: {user_id: req.params.userId}},
      {model: ShippingAddress, where: {user_id: req.params.userId}},
      {model: Review,  where: {user_id: req.params.userId}}
    ]
    })
    .then(foundUser => {
      res.json(foundUser);
    })
    .catch(next);
})

router.get('/:userId/cart', (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.userId
    },
    include: [
      {model: BillingAddress, where: {user_id: req.params.userId}},
      {model: CreditCard, where: {user_id: req.params.userId}},
      {model: ShippingAddress, where: {user_id: req.params.userId}},
      {model: Cart, where: {user_id: req.params.userId}}
    ]
    })
    .then(foundUser => {
      res.json(foundUser);
    })
    .catch(next);
})

module.exports = router;
