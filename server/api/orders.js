const router = require('express').Router();

const Order = require('APP/db/models/order');
const LineItem = require('APP/db/models/lineitem');
const Cart = require('APP/db/models/cart');
const Product = require('APP/db/models/product');

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
        },
        include: [{
            model: Product
        }]
    })
        .then((foundCarts) => {
            const lineItemPromises = foundCarts.map((cartItem) => {
                return LineItem.create({
                    product_id: cartItem.product.id,
                    quantity: cartItem.quantity,
                    price: cartItem.product.price
                });
            });
            return Promise.all(lineItemPromises);
        })
        .catch(next);

    const createOrder = Cart.findAll({
        where: {
            user_id: req.params.userId
        },
        include: [{
            model: Product
        }]
    })
        .then((foundCarts) => {
            let total = 0;

            foundCarts.forEach((cart) => {
                total += cart.product.price * cart.quantity;
            })
            return total;
        })
        .then((total) => {
            return Order.create({
                status: 'Created',
                totalPrice: total,
                user_id: req.params.userId
            })
        })
        .then((createdOrder) => {
            return createdOrder;
        })
        .catch(next);

    Promise.all([createLineItems, createOrder])
        .then(([createdLineItems, createdOrder]) => {
            return createdLineItems.forEach((lineItem) => {
                return lineItem.setOrder(createdOrder.id)
            })
        })
        .then(() => {
            return Cart.destroy({
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
