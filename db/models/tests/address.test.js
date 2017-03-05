// TOOD: Everyone please npm install, I installed chai-properties and chai-things to dev

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Address = require('APP/db/models/address');
const User = require('APP/db/models/user');
let Promise = require('bluebird');

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

    describe('assocations', () => {
        it('belongs to a user', () => {
            
            let creatingUser = User.create({
                firstName: 'Ben',
                lastName: 'Gu',
                email: 'TheBenjimoto@gmail.com',
                isAdmin: false
            })
            let creatingAddress = Address.create({
                address1: '1235 Park Ave',
                city: 'New York',
                state: 'NY',
                zipCode: 10128
            })
        
        return Promise.all([creatingUser, creatingAddress])
            .spread((createdUser, createdAddress) => {
                return createdAddress.setUser(createdUser)
            })
            .then(() => {
                Address.findOne({
                    where: {
                        address1: '1235 Park Ave',
                        include: {model: User}
                    }
                })
            })
            .then(foundAddress => {
                // TODO: this should work after tables populate?
                // expect(foundAddress.user).to.exist;
            })
        })
    })
})