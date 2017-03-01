const Sequelize = require('sequelize');
const db = require('APP/db');

const CreditCard = db.define('credit_cards', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

module.exports = CreditCard;
