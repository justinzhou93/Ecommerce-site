const Sequelize = require('sequelize');
const db = require('APP/db');

const CreditCard = db.define('credit_cards', {
  number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  month: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  year: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  CCV: {
  	type: Sequelize.STRING,
  	allowNull: false
  }
});

module.exports = CreditCard;
