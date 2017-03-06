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

        it('returns the total price for the items in line item', () => {

          describe('totalPrice', function () {

            it('returns the total price for the items in line item', function () {
              var lineitem = LineItem.build({
                quantity: 5,
                price: 50
              });

              expect(lineitem.totalPrice).to.be(250);

            });
          });
        });

        describe('class methods', () => {

          beforeEach(() => {
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
          });

          // TODO: finish this test, does it have multiple it statements within it? Do I need to create orders? Not sure how to tackle
          describe('purchase', () => {
            it('sets all the line items of the specific user to Purchased', () => {
              return LimeItem.purchase(1)
                .then(result => {
                  expect(result).to.equal(result);
                })
            })
          })

          describe('totalCartPrice', () => {
            it('returns the total price of every line item for that specific user', () => {
              return LineItem.totalCartPrice(1)
                .then(total => {
                  expect(total).to.be(125);
                })

            })
          })
        })
      })
    })
  })
});