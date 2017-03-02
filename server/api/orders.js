'use strict'; // eslint-disable-line semi camelcase

const db = require('APP/db')
const express = require('express');
const router = express.Router();

const Order = db.model('orders');
const LineItem = db.model('lineitems');

// TODO: admin use only -- all orders
router.get('/', function (req, res, next) {
    Order.findAll({
        include: [{
            model: LineItem
        }]
    })
        .then((orders) => {
            res.json(orders);
        })
        .catch(next);
});

// one specific order
router.get('/:orderId', function (req, res, next) {
    Order.findById(req.params.orderId)
        .then((order) => {
            res.json(order);
        })
        .catch(next);
});

//updating a specific order status from 'Created' to 'Cancelled'/'Processing'/'Complete'
router.put('/:orderId', function (req, res, next) {
    Order.findById(req.params.orderId)
        .then((order) => {
            return order.update({ status: req.body.status })
        })
        .then((updatedOrder) => {
            res.json(updatedOrder);
        })
        .catch(next);
});

module.exports = router;
