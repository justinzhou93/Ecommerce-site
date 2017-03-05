// TOOD: Everyone please npm install, I installed chai-properties and chai-things to dev

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const CreditCard = require('APP/db/models/creditcard');

describe('Credit Card model', function() {
	
    it('has the expected schema definition', () => {
        expect(CreditCard.attributes.number).to.be.an('object');
        expect(CreditCard.attributes.name).to.be.an('object');
        expect(CreditCard.attributes.month).to.be.an('object');
        expect(CreditCard.attributes.year).to.be.an('object');
        expect(CreditCard.attributes.CCV).to.be.an('object');
    });

    describe('validations', () => {
	// The `title` column should be a required field.
    it('requires number', () => {
        const creditcard = CreditCard.build();
            return creditcard.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors).to.contain.a.thing.with.properties({
                        path: 'number',
                        type: 'notNull Violation'
                    });
                });
        });

     })
})