// 'use strict'; // eslint-disable-line semi

// const db = require('APP/db')
// const User = require('./user')
// const {expect} = require('chai')

// describe('User', () => {
//   before('wait for the db', () => db.didSync)

//   describe('authenticate(plaintext: String) ~> Boolean', () => {
//     it('resolves true if the password matches', () =>
//       User.create({ password: 'ok' })
//         .then(user => user.authenticate('ok'))
//         .then(result => expect(result).to.be.true))

//     it("resolves false if the password doesn't match", () =>
//       User.create({ password: 'ok' })
//         .then(user => user.authenticate('not ok'))
//         .then(result => expect(result).to.be.false))
//   })
// })

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const User = require('APP/db/models/user');

describe('User model', function() {

  it('has the expected schema definition', () => {
    expect(User.attributes.firstName).to.be.an('object');
    expect(User.attributes.lastName).to.be.an('object');
    expect(User.attributes.email).to.be.an('object');
    expect(User.attributes.isAdmin).to.be.an('object');
  });

  describe('validations', () => {
    // The `firstName` column should be a required field.
    it('requires firstName', () => {
      const user = User.build({});
      return user.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors).to.contain.a.thing.with.properties({
            path: 'firstName',
            type: 'notNull Violation',
          });
        });
    });

    it('requires lastName', () => {
      const user = User.build();
      return user.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors).to.contain.a.thing.with.properties({
            path: 'lastName',
            type: 'notNull Violation',
          });
        });
    });

    it('requires `email` (in a more strict way`)', () => {
      const user = User.build({
        firstName: "First Name",
        lastName: "Last Name",
        email: ''
      });
      return user.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors).to.contain.a.thing.with.properties({
            path: 'email',
            type: 'Validation error',
          });
        });
    });

    it('sets the default value for isAdmin to false', () => {
      const user = User.create({
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'test@email.com',
      });
      return user
        .then(result => {
          expect(result).to.be.an('object');
          expect(result.isAdmin).to.equal(false);
        });
    });
  })
});
