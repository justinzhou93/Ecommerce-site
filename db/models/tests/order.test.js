import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Order = require('APP/db/models/order');

describe('Order model', function() {

  it('has the expected schema definition', () => {
    expect(Order.attributes.status).to.be.an('object');
    expect(Order.attributes.totalPrice).to.be.an('object');
  });

  describe('validations', () => {
    it('sets the default order status to Created', () => {
      const order = Order.build({
        totalPrice: 100
      });
      expect(order.status).to.equal('Created');
    });
  });
});
