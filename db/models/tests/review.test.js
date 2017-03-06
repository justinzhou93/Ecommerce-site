import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Review = require('APP/db/models/review');

describe('Review model', function () {

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

  describe('associations', () => {
    it('belongs to a Product and User', () => {

      let creatingUser = User.create({
        firstName: 'Ben',
        lastName: 'Gu',
        email: 'TheBenjimoto@gmail.com',
        isAdmin: false
      });
      let creatingReview = Review.create({
        title: 'Great review',
        body: 'What an awesome review you did there',
        rating: 5,
        date: 10-14-1984
      });
      let creatingProduct = Product.create({
        title: 'Good Product',
        description: 'This product will change your life',
        price: 100,
        inventory: 5,
        imgUrl: 'http://imgURL.com'
      });

      return Promise.all([creatingUser, creatingProduct, creatingReview])
        .spread((createdUser, createdProduct, createdReview) => {
          return [createdReview.setUser(createdUser), createdReview.setUser(createdProduct)]
        })
        .then(() => {
          Review.findOne({
            where: {
              title: 'Great review',
              include: [{model: User}, {model: Product}]
            }
          })
        })
        .then(foundReview => {
          expect(foundReview.user).to.exist();
          expect(foundReview.product).to.exist();
        })
    })
  })
});
