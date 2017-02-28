const Sequelize = require('sequelize')
const db = require('APP/db')

const ShippingAddress = db.define('shipping addresses', {
  address1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zipCode: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      isNumeric: true
    }
  }
});

module.exports = ShippingAddress;
