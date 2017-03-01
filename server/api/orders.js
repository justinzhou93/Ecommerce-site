const router = require('express').Router();

const Order = require('APP/db/models/order');
const LineItem = require('APP/db/models/lineitem');

// admin use only -- all orders
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

// all user-specific orders
router.get('/:userId', function (req, res, next) {
    Order.findAll({
        where: {
            userId: req.params.userId
        },
        include: [{
            model: LineItem
        }]
    })
        .then((userOrders) => {
            res.json(userOrders);
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

// creating order
router.post('/', function (req, res, next) {
    Order.create(req.body)
        .then((createdOrder) => {
            res.json(createdOrder);
        })
        .catch(next);
});

//updating a specific order
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
