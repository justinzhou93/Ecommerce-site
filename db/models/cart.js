const Sequelize = require('sequelize');
const db = require('APP/db');

const Product = require('./product');

const Cart = db.define('Cart', {
    quantity: {
        type: Sequelize.INTEGER
    }
});

module.exports = Cart;
