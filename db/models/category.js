const Sequelize = require('sequelize')
const db = require('APP/db')


const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
