const Sequelize = require('sequelize');
const db = require('APP/db');


const Product = db.define('product', {
  title: {
    type: Sequelize.STRING
    // allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER
    // allowNull: false
  },
  inventory: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  imgUrl: {
    type: Sequelize.STRING
  }
});

module.exports = Product;
