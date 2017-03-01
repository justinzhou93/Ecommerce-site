const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = require('./product');

const Cart = db.define('Cart', {
    quantity: {
        type: Sequelize.INTEGER
    }
}, {
    classMethods: {
        totalPrice: function (userId) {
            let total = 0;
            Cart.findAll({
                where: {
                    userId: userId
                }
            })
                .then(function (cartItems) {
                    cartItems.forEach(function(item) {
                        total += item.price;
                    })
                })
                .then(function () {
                    return total;
                })
        }
    },
    getterMethods: {
        price: function () {
            Product.findById(this.productId)
                .then((product) => {
                    return product.price * this.quantity;
                })
        }
    }
});

module.exports = Cart;
