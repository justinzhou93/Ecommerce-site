const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = require('./order');

const LineItem = db.define('lineitems', {
    quantity: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.ENUM('Cart', 'Purchased')
    }
}, {
    classMethods: {
        purchase: function (userId) {
            const creatingOrder = LineItem.totalCartPrice(userId)
                .then((total) => {
                    // TODO not sure how to pass this error down through to the routes.
                    // just checking to make sure cart is not empty. right now, it doesn't allow
                    // orders to go through if cart is empty, but it doesn't pass error thru correctly
                    if (!total){
                      const err = new Error('no items in cart!')
                      err.status = 400;
                      return err;
                    } else {
                      return Order.create({
                          status: 'Created',
                          totalPrice: total,
                          user_id: userId
                      })
                    }
                })
                .catch(err => err)

            const getAndUpdateCart = LineItem.scope({method: ['cart', userId]}).findAll()
                .then((foundCart) => {
                    const updatedCart = foundCart.map((item) => {
                        return item.update({
                            status: 'Purchased'
                        })
                    });

                    return Promise.all(updatedCart);
                })
                .catch(err => err)

            return Promise.all([creatingOrder, getAndUpdateCart])
                .then(([createdOrder, updatedCart]) => {
                    const settingOrderIdToCart = updatedCart.map((item) => {
                        return item.setOrder(createdOrder);
                    })
                    return Promise.all(settingOrderIdToCart);
                })
                // .catch(err => err)
        },
        totalCartPrice: function (userId) {
            return LineItem.scope({ method: ['cart', userId]}).findAll()
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
            return this.quantity * +this.price;
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
