import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Review = require('APP/db/models/review');

describe('Review model', function() {

  it('has the expected schema definition', () => {
    expect(Review.attributes.title).to.be.an('object');
    expect(Review.attributes.body).to.be.an('object');
    expect(Review.attributes.rating).to.be.an('object');
    expect(Review.attributes.date).to.be.an('object');
  });

  describe('validations', () => {
    // The `title` column should be a required field.
    it('requires title', () => {
      const review = Review.build({});
      return review.validate()
        .then(err => {
          expect(err).to.be.an('object');
          expect(err.errors).to.contain.a.thing.with.properties({
            path: 'title',
            type: 'notNull Violation',
          });
        });
    });

  });
});
