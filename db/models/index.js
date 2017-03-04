'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const CreditCard = require('./creditcard');
const Address = require('./address');
const Product = require('./product');
const Review = require('./review');
const Category = require('./category');
const LineItem = require('./lineitem');
const Order = require('./order');

OAuth.belongsTo(User);
User.hasOne(OAuth);
User.hasMany(CreditCard);
User.hasMany(Address);
User.hasMany(Review);
User.hasMany(Order);
User.hasMany(LineItem);
Address.belongsTo(User);
CreditCard.belongsTo(User);
Review.belongsTo(Product);
Product.hasMany(Review);
Review.belongsTo(User);
Product.belongsToMany(Category, {through: 'ProductCategory'});
Category.belongsToMany(Product, {through: 'ProductCategory'});
Order.belongsTo(User);
Order.hasMany(LineItem);
LineItem.belongsTo(Order);
LineItem.belongsTo(Product);
LineItem.belongsTo(User);

module.exports = {User, CreditCard, Address, Product, Review, Category, LineItem, Order};
