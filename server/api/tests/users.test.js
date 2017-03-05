// 'use strict'; // eslint-disable-line semi

// const request = require('supertest-as-promised')
// const {expect} = require('chai')
// require('APP/db')
// require('APP/db/models/user')
// const app = require('../../start')

// describe('/api/users', () => {
//   describe('when not logged in', () => {
//     it('GET /:id fails 401 (Unauthorized)', () =>
//       request(app)
//         .get(`/api/users/1`)
//         .expect(401)
//     )

//     it('POST creates a user', () =>
//       request(app)
//         .post('/api/users')
//         .send({
//           email: 'beth@secrets.org',
//           password: '12345'
//         })
//         .expect(201)
//     )

//     it('POST redirects to the user it just made', () =>
//       request(app)
//         .post('/api/users')
//         .send({
//           email: 'eve@interloper.com',
//           password: '23456',
//         })
//         .redirects(1)
//         .then(res => expect(res.body).to.contain({
//           email: 'eve@interloper.com'
//         }))
//     )
//   })
// })

describe('Orders Route: ', function(){
  //clear db before beginning each run
  beforeEach(function () {
    db.sync({force: true})
    .then(()=>console.log('hi'))
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
