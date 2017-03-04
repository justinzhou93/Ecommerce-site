const Sequelize = require('sequelize');
const db = require('APP/db');

const CreditCard = db.define('credit_cards', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  month: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  year: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  },
  CCV: {
  	type: Sequelize.INTEGER,
  	allowNull: false
  }
});

module.exports = CreditCard;
