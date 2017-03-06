'use strict';
/*eslint-disable*/
var expect = require('chai').expect;
var app = require('../../start.js');
var supertest = require('supertest');
var agent = supertest.agent(app);

var db = require('APP/db');
var Order = require('APP/db/models/order');
var LineItem = require('APP/db/models/lineitem');
var Category = require('APP/db/models/category');
var Product = require('APP/db/models/product');
var User = require('APP/db/models/user');
var Promise = require('bluebird');

describe('Orders Route: ', function(){
  var category, user, product;
  //clear db before beginning each run
  before('waiting for db to sync', () => db.didSync);

  beforeEach(function () {
    return db.sync({force: true})
    .then(() => {

      category = Category.create({title:"easy"})
      product = Product.create({
        title: 'newgame',
        description: 'some description',
        price: 5,
        inventory: 10,
        imgUrl: 'www.google.com'
      })

      user = User.create({
        firstName: 'asdf',
        lastName: 'qwerty',
        email: 'asdf@gmail.com',
        isAdmin: 'FALSE',
        password_digest: 'asdfasfd'
      })

      Promise.all([category, product, user])
      .spread((newCategory, newProduct, newUser) => {
        // newProduct.setCategories(newCategory)
        return LineItem.create({
          quantity: 2,
          user_id: newUser.id,
          product_id: newProduct.id,
          price: 5
        })
      })
    })
});

  // empty tables after each spec
  // afterEach(function () {
  //   return Promise.all([
  //     Order.truncate({ cascade: true }),
  //     LineItem.truncate({ cascade: true }),
  //     Category.truncate({cascade: true}),
  //     User.truncate({cascade: true}),
  //     Product.truncate({cascade: true})
  //   ]);
  // });

  describe('GET /orders', function(){
    it('returns all orders in db', function () {
      agent
      .get('/orders')
      .expect(200)
      .expect(function (res) {
        expect(res.body).to.be.an.instanceOf(Array);
        expect(res.body[0].totalPrice).to.equal(10);
      })
    })
  });
  //
  describe('GET /orders/:id', function(){
    it('returns order, given id', function () {
      agent
      .get(`/orders/${user.id}`)
      .expect(200)
      .expect(function (res) {
        expect(res.body).to.be.an.instanceOf(Array);
        expect(res.body.totalPrice).to.equal(10);
      })
    });

  });

  describe('PUT /orders/:id', function(){
    it('updates article given id', function () {
        agent
        .put(`/orders/${user.id}`)
        .send({
          status: 'Processing'
        })
        .expect(200)
        .expect(function (res) {
          expect(res.body.status).to.equal('Processing');
        })
    });

  });
})
