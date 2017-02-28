const Sequelize = require('sequelize')
const db = require('APP/db')


const Category = db.define('category', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  }
})
