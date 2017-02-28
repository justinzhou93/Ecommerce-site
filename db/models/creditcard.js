const Sequelize = require('sequelize');
const db = require('APP/db');

const CreditCard = db.define('credit cards', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isCreditCard: true
    }
  }
});

module.exports = CreditCard;
