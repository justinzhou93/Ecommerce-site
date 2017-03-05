'use strict'; // eslint-disable-line semi camelcase

const db = require('APP/db')
const express = require('express');
const router = express.Router();

const User = db.model('users')
const Address = db.model('addresses');
const CreditCard = db.model('credit_cards');
const Review = db.model('reviews');
const Order = db.model('orders');
const LineItem = db.model('lineitems');

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


// TODO: this is for admin use only
router.get('/', (req, res, next) => {
  User.findAll()
  .then(users => res.json(users))
  .catch(next);
});

// finding details of specific user (for user profile page)
router.get('/:userId', (req, res, next) => {
  User.findById(req.params.userId, {
      include: [
        {model: Address},
        {model: CreditCard},
        {model: Review},
        {model: Order, include: [
            {model: LineItem}
        ]}
      ]
    })
    .then(foundUser => {
      res.json(foundUser);
    })
    .catch(next);
});

// gets all user addresses
router.get('/:userId/address', (req, res, next) => {
  Address.findAll({
    where: {
      user_id: req.params.userId
    }
  })
    .then((foundAddresses) => {
      res.json(foundAddresses);
    })
    .catch(next);
});

// adds a new user address
router.post('/:userId/address', (req, res, next) => {
  User.findById(req.params.userId)
    .then(foundUser => {
      return Address.create(req.body)
        .then(createdAddress => {
            return createdAddress.setUser(foundUser);
        })
    })
    .then(updatedAddress => {
      res.json(updatedAddress);
    })
    .catch(next);
});

// gets all user credit credit_cards
router.get('/:userId/creditcard', (req, res, next) => {
  CreditCard.findAll({
    where: {
      user_id: req.params.userId
    }
  })
    .then((foundCreditCards) => {
      res.json(foundCreditCards);
    })
    .catch(next);
});

// adds a new user creditcard
router.post('/:userId/creditcard', (req, res, next) => {
  User.findById(req.params.userId)
    .then(foundUser => {
      return CreditCard.create(req.body)
        .then(createdCreditCard => {
          return createdCreditCard.setUser(foundUser);
        })
    })
    .then(updatedCreditCard => {
      res.json(updatedCreditCard);
    })
    .catch(next);
});

/** --------------------------USER CART----------------------- */
// get user's cart info
router.get('/:userId/cart', (req, res, next) => {
    User.findById(req.params.userId, {
        include: [
            {model: Address},
            {model: CreditCard},
            {model: LineItem},
        ]
    })
    .then(foundUser => {
      res.json(foundUser);
    })
    .catch(next);
});

// user adding product to cart
router.post('/:userId/cart/:productId', (req, res, next) => {
  LineItem.create({
    quantity: req.body.quantity,
    user_id: req.params.userId,
    product_id: req.params.productId,
    price: req.body.price,
    status: 'Cart'
  })
    .then(createdCart => {
      res.json(createdCart);
    })
    .catch(next);
});

// when changing quantity of cart
router.put('/:userId/cart/:productId', (req, res, next) => {
  LineItem.findOne({
    where: {
      user_id: req.params.userId,
      product_id: req.params.productId,
      status: 'Cart'
    }
  })
    .then(foundCart => {
      return foundCart.update(req.body)
    })
    .then(updatedCart => {
      res.json(updatedCart);
    })
    .catch(next);
});

// removing item from cart
router.delete('/:userId/cart/:LineItemId', (req, res, next) => {
  LineItem.destroy({
    where: {
      user_id: req.params.userId,
      id: req.params.LineItemId,
      status: 'Cart'
    }
  })
    .then(() => {
      res.send('Item successfully removed from cart!');
    })
    .catch(next);
});
/** --------------------- USER PURCHASING CART ------------------- */

// user purchases an order (from cart)
router.post('/:userId/orders', (req, res, next) => {
  LineItem.purchase(req.params.userId)
    .then(order => res.status(201).send(order))
    .catch(next);
});


module.exports = router;
