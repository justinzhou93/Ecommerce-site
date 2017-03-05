// TOOD: Everyone please npm install, I installed chai-properties and chai-things to dev

import chai from 'chai';
import chaiProperties from 'chai-properties';
import chaiThings from 'chai-things';
chai.use(chaiProperties);
chai.use(chaiThings);
const expect = chai.expect;
const db = require('APP/db');
const Category = require('APP/db/models/category');

describe('Category model', function() {
	
    it('has the expected schema definition', () => {
        expect(Category.attributes.title).to.be.an('object');
    });

    describe('validations', () => {
	// The `title` column should be a required field.
    it('requires title', () => {
        const category = Category.build();
            return category.validate()
                .then(err => {
                    expect(err).to.be.an('object');
                    expect(err.errors).to.contain.a.thing.with.properties({
                        path: 'title',
                        type: 'notNull Violation'
                    });
                });
        });

     })
})