const Sequelize = require('sequelize')
const db = require('APP/db')


const Category = db.define('categories', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})

module.exports = Category;
