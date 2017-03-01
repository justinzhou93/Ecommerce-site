const router = require('express').Router();

const Order = require('APP/db/models/order');
const LineItem = require('APP/db/models/lineitem');
const Cart = require('APP/db/models/cart');

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
            user_id: req.params.userId
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

// creating order, line items
router.post('/:userId', function (req, res, next) {
    const createLineItems = Cart.findAll({
        where: {
            user_id: req.params.userId
        }
    })
        .then((foundCarts) => {
            const lineItemPromises = foundCarts.map((cartItem) => {
                return LineItem.create({
                    product_id: cartItem.productId,
                    quantity: cartItem.quantity,
                    price: cartItem.price
                });
            });
            return Promise.all(lineItemPromises);
        })
        .catch(next);

    const createOrder = Cart.totalPrice(req.params.userId)
        .then((cartTotal) => {
            return Order.create({
                status: 'Created',
                totalPrice: cartTotal
            })
        })
        .catch(next);

    Promise.all([createLineItems, createOrder])
        .then(() => {
            return Cart.delete({
                where: {
                    user_id: req.params.userId
                }
            })
        })
        .then(() => {
            res.send('Order created successfully!');
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
