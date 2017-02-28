const Sequelize = require('sequelize');
const db = require('APP/db');

const LineItem = db.define('LineItems', {
    quantity: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.INTEGER
    }
}, {
    getterMethods: {
        totalPrice: function () {
            return this.quantity * this.price;
        }
    }
});

module.exports = LineItem;
