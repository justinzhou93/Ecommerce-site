const Sequelize = require('sequelize')
const db = require('APP/db')


const Review = db.define('review', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  body: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.INTEGER
  },
  date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
})

Review.belongsTo(Product)
Review.belongsTo(User)
