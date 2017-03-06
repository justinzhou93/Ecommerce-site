import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Product = require('APP/db/models/product');

before('wait for the db', () => db.didSync);

  describe('Product model', function () {

    it('has the expected schema definition', () => {
      expect(Product.attributes.title).to.be.an('object');
      expect(Product.attributes.description).to.be.an('object');
      expect(Product.attributes.price).to.be.an('object');
      expect(Product.attributes.inventory).to.be.an('object');
      expect(Product.attributes.imgUrl).to.be.an('object');
    });

    describe('validations', () => {
      // The `title` column should be a required field.
      it('requires title', () => {
        const product = Product.build({});
        return product.validate()
          .then(err => {
            expect(err).to.be.an('object');
            expect(err.errors).to.contain.a.thing.with.properties({
              path: 'title',
              type: 'notNull Violation',
            });
          });
      });

      it('requires price', () => {
        const product = Product.build({
          title: "Title is given",
        });
        return product.validate()
          .then(err => {
            expect(err).to.be.an('object');
            expect(err.errors).to.contain.a.thing.with.properties({
              path: 'price',
              type: 'notNull Violation',
            });
          });
      });

      it('sets the default inventory value to 0', () => {
        const product = Product.create({
          title: 'title',
          description: 'this is a description of the product',
          price: 100,
          imgUrl: 'someImageURL'
        });
        return product
        .then(result => expect(result.inventory).to.equal(0))
      });
    });
  });
