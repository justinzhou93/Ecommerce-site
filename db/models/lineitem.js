const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = require('APP/db/product');

const LineItem = db.define('LineItems', {
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

module.exports = LineItem;
