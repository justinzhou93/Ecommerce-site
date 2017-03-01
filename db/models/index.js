'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const CreditCard = require('./creditcard');
const ShippingAddress = require('./shippingaddress');
const BillingAddress = require('./billingaddress');
const Product = require('./product');
const Review = require('./review');
const Category = require('./category');
const Cart = require('./cart');
const LineItem = require('./lineitem');
const Order = require('./order');

OAuth.belongsTo(User);
User.hasOne(OAuth);
User.hasMany(CreditCard);
User.hasMany(ShippingAddress);
User.hasMany(BillingAddress);
BillingAddress.belongsTo(User);
ShippingAddress.belongsTo(User);
Review.belongsTo(Product);
Review.belongsTo(User);
Product.belongsToMany(Category, {through: 'ProductCategory'});
Category.belongsToMany(Product, {through: 'ProductCategory'});
Order.belongsTo(User);
LineItem.belongsTo(Order);
LineItem.belongsTo(Product);
Cart.belongsTo(User);
Cart.belongsTo(Product);

module.exports = {User, CreditCard, ShippingAddress, BillingAddress, Product, Review, Category, Cart, LineItem, Order};
