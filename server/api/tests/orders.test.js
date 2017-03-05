'use strict';

var expect = require('chai').expect;
var request = require('supertest-as-promised');

var app = require('../../../index.js');
var agent = request.agent(app);

var db = require('APP/db');
var Order = require('APP/db/models/order');
var LineItem = require('APP/db/models/order');
var Category = require('APP/db/models/category');
var Product = require('APP/db/models/product');
var User = require('APP/db/models/user');

describe('Orders Route: ', function(){
  //clear db before beginning each run
  beforeEach(function () {
    db.sync({force: true})
    .then(()=>console.log('hi'))

    Category.create({title:"easy"})
    .then(category => Product.create({

    }))



    User.create()


  });

  // empty tables after each spec
  afterEach(function () {
    return Promise.all([
      Order.truncate({ cascade: true }),
      LineItem.truncate({ cascade: true })
    ]);
  });

  describe('GET /orders', function(){
    it('returns all orders in db', function () {

      return Order.create({
        totalPrice: 123
      }).then(() =>
        agent
        .get('/orders')
        .expect(200)
        .expect(function (res) {
          expect(res.body).to.be.an.instanceOf(Array);
          expect(res.body[0].totalPrice).to.equal(123);
        })
      ).catch(err => {throw err})
    })
  });
  //
  describe('GET /orders/:id', function(){
    it('returns order, given id', function () {

      return Order.create({
        totalPrice: 123
      }).then(() =>
        agent
        .get('/orders/1')
        .expect(200)
        .expect(function (res) {
          expect(res.body[0].totalPrice).to.equal(123);
        })
      )
    });

  });

  describe('PUT /orders/:id', function(){
    it('updates article given id', function () {
      Order.create({
        totalPrice: 123
      }).then(() =>
        agent
        .put('/orders/1')
        .send({
          totalPrice: 234
        })
        .expect(200)
        .expect(function (res) {
          expect(res.body[0].totalPrice).to.equal(234);
        })
      )
    });

  });
})
