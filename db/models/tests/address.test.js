// TOOD: Everyone please npm install, I installed chai-properties and chai-things to dev

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Address = require('APP/db/models/address');

describe('Address model', function() {
	
    it('has the expected schema definition', () => {
        expect(Address.attributes.address1).to.be.an('object');
        expect(Address.attributes.address2).to.be.an('object');
        expect(Address.attributes.city).to.be.an('object');
        expect(Address.attributes.state).to.be.an('object');
        expect(Address.attributes.zipCode).to.be.an('object');
    });

    describe('validations', () => {
	// The `title` column should be a required field.
    it('requires address1', () => {
        const address = Address.build();
            return address.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors).to.contain.a.thing.with.properties({
                        path: 'address1',
                        type: 'notNull Violation',
                    });
                });
        });
    
    it('requires city', () => {
        const address = Address.build();
            return address.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors).to.contain.a.thing.with.properties({
                        path: 'city',
                        type: 'notNull Violation',
                    });
                });
        });

    it('requires state', () => {
        const address = Address.build();
            return address.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors).to.contain.a.thing.with.properties({
                        path: 'state',
                        type: 'notNull Violation',
                    });
                });
        });

    it('requires zipCode', () => {
        const address = Address.build();
            return address.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors).to.contain.a.thing.with.properties({
                        path: 'zipCode',
                        type: 'notNull Violation',
                    });
                });
        });
     })
})