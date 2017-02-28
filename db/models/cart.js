const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = require('./product');

const Cart = db.define('Cart', {
    quantity: {
        type: Sequelize.INTEGER
    }
}, {
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
