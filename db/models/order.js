const Sequelize = require('sequelize');
const db = require('APP/db');

const Order = db.define('Orders', {
    status: {
        type: Sequelize.ENUM('Created', 'Processing', 'Cancelled', 'Completed'),
        defaultValue: 'Created'
    },
    totalPrice: {
        type: Sequelize.INTEGER
    }
});

module.exports = Order;
