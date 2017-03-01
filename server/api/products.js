const router = require('express').Router()
const Product = require('../../db/models/product');
const Category = require('../../db/models/category');
const Review = require('../../db/models/review');

console.log('inside of the products page');
// makes life easier, by finding one product, with respective categories and reviews
router.param('id', (req, res, next, id) => {
  Product.findOne({
    where: {
      id: id
    },
    include: [
      {model: Category, as: 'Categories'},
      {model: Review, as: 'Reviews'}
    ]
  })
  .then(product => {
    if (!product) {
      const err = new Error('does not exist');
      err.status = 404;
      next(err);
    } else {
      req.requestedProduct = product;
      next()
    }
  })
  .catch(next);
})

// find all products in the database, with respective categories and reviews
router.get('/', (req, res, next) => {
  Product.findAll({
    include: [
      {model: Category, as: 'Categories'},
      {model: Review, as: 'Reviews'}
    ]
  })
  .then(products => res.json(products))
  .catch(next);
})

// get product by id
router.get('/:id', (req, res, next) => {
  res.json(req.requestedProduct);
})

// ADMIN: post new product
router.post('/', (req, res, next) => {
  Product.findOrCreate(req.body)
  .spread((product, created) => {
    res.status(201).json(product);
  })
  .catch(next)
})

// ADMIN: update product, for price, etc.
router.put('/:id', (req, res, next) => {
  req.requestedProduct.update(req.body)
  .then(updatedProduct => {
    res.json(updatedProduct)
  })
  .catch(next);
})

// ADMIN: remove product --> should rarely happen, but just in case...
router.delete('/:id', (req, res, next) => {
  req.requestedProduct.destroy()
  .then(() => {
    res.redirect(204, '/')
  })
})

// for front page, where we want products, categorized by category. finds all categories,
// eagerly loads the products in that category
router.get('/categories', (req, res, next) => {
  Category.findAll({
    include: [
      {model: Product, as: 'Products'}
    ]
  })
  .then(categories => res.json(categories))
  .catch(next)
})

// ADMIN: adds new categories
router.post('/categories', (req, res, next) => {
  Category.findOrCreate(req.body)
  .spread((category, created) => res.status(201).send(category))
  .catch(next)
})

// ADMIN: changes category names
router.put('/categories/:categoryId', (req, res, next) => {
  Category.findOne({
    where: {
      id: req.params.categoryId
    }
  })
  .then(selectedCategory => selectedCategory.update(req.body))
  .then(updatedCategory => res.status(201).send(updatedCategory))
  .catch(next)
})

module.exports = router;
