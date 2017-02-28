'use strict'; // eslint-disable-line semi

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('User')
// to get access to the User model.

const User = require('./user');
const OAuth = require('./oauth');
const CreditCard = require('./creditcard');
const ShippingAddress = require('./shippingaddress');
const BillingAddress = require('./billingaddress');

OAuth.belongsTo(User);
User.hasOne(OAuth);
User.hasMany(CreditCard);
User.hasMany(ShippingAddress);
User.hasMany(BillingAddress);

module.exports = {User, CreditCard, ShippingAddress, BillingAddress};
