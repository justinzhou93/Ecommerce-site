const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = require('./order');

const LineItem = db.define('lineitems', {
    quantity: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    },
    status: {
        type: Sequelize.ENUM('Cart', 'Purchased')
    }
}, {
    classMethods: {
        purchase: function (userId) {
            const creatingOrder = LineItem.totalCartPrice(userId)
                .then((total) => {
                    return Order.create({
                        status: 'Created',
                        totalPrice: total,
                        user_id: userId
                    })
                })

            const getAndUpdateCart = LineItem.scope({method: ['card', userId]}).findAll()
                .then((foundCart) => {
                    const updatedCart = foundCart.map((item) => {
                        return item.update({
                            status: 'Purchased'
                        })
                    });

                    return Promise.all(updatedCart);
                })

            Promise.all([creatingOrder, getAndUpdateCart])
                .then(([createdOrder, updatedCart]) => {
                    const settingOrderIdToCart = updatedCart.map((item) => {
                        return item.setOrder(createdOrder);
                    })

                    return Promise.all(settingOrderIdToCart);
                })
        },
        totalCartPrice: function (userId) {
            LineItem.scope({ method: ['cart', userId]}).findAll()
                .then((foundLineItems) => {
                    let total = 0;

                    foundLineItems.forEach((cart) => {
                        total += cart.totalPrice;
                    });
                    return total;
                })
                .then((total) => {
                    return total;
                })
        }
    },
    getterMethods: {
        totalPrice: function () {
            return this.quantity * this.price;
        }
    },
    scopes: {
        cart: function (userId) {
            return {
                where: {
                    user_id: userId,
                    status: 'Cart'
                }
            }
        }
    }
});

module.exports = LineItem;
