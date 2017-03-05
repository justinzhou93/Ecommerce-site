// TOOD: Everyone please npm install, I installed chai-properties and chai-things to dev

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const LineItem = require('APP/db/models/lineitem');

describe('Line Item model', function() {
	
    it('has the expected schema definition', () => {
        expect(LineItem.attributes.quantity).to.be.an('object');
        expect(LineItem.attributes.price).to.be.an('object');
        expect(LineItem.attributes.status).to.be.an('object');
    });

    describe('virtual getters', () => {
	// The `title` column should be a required field.
      describe('totalPrice', function() {

          it('returns the total price for the items in line item', function() {
            var lineitem = LineItem.build({
                quantity: 5,
                price: 50
            });

            expect(lineitem.totalPrice).to.be(250);

          });
      });
  });
});