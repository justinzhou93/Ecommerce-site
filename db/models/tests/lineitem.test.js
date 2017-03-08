// TOOD: Everyone please npm install, I installed chai-properties and chai-things to dev
/* eslint-disable */
import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const LineItem = require('APP/db/models/lineitem');
const User = require('APP/db/models/user');
const Product = require('APP/db/models/product');

describe('Line Item model', () => {
  describe('Line Item model', function () {

    it('has the expected schema definition', () => {
      expect(LineItem.attributes.quantity).to.be.an('object');
      expect(LineItem.attributes.price).to.be.an('object');
      expect(LineItem.attributes.status).to.be.an('object');
    });

    describe('virtual getters', () => {
      // The `title` column should be a required field.

      describe('totalPrice', () => {

        describe('class methods', () => {

          beforeEach(() => {
            return db.sync({force: true})
            .then(() => {
              var theseLineItems = [1, 3, 5].map(num => {
                return LineItem.create({
                  quantity: num,
                  price: 10 + num,
                  status: 'Cart',
                  order_id: num,
                  product_id: num,
                  user_id: 1
                });
              });
              return Promise.all(theseLineItems);
            })
          });
        })
      })
    })
  })
});
