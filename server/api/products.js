const router = require('express').Router()
const Product = require('../../db/models/product');
const Category = require('../../db/models/category');
const Review = require('../../db/models/review');

// makes life easier, by finding one product, with respective categories and reviews
router.param('id', (req, res, next, id) => {
  Product.findOne({
    where: {
      id: id
    },
    include: [
      {model: Category, as: 'categories'},
      {model: Review, as: 'reviews'}
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
      {model: Category, as: 'categories'},
      {model: Review, as: 'reviews'}
      // {all:true}
    ]
  })
  .then(products => res.json(products))
  .catch(next);
})


// for front page, where we want products, categorized by category. finds all categories,
// eagerly loads the products in that category
router.get('/categories', (req, res, next) => {
  console.log('hello');
  Category.findAll({
    include: [
      {model: Product, as: 'products'}
      // {all:true}
    ]
  })
  .then(categories => res.send(categories))
  .catch(next)
})

// ADMIN: adds new categories
router.post('/categories', (req, res, next) => {
  Category.findOrCreate({
    where: {
      title: req.body.title
    }
  })
  .spread((category, created) => {
    if (!created){
      var err = new Error('already exists');
      err.status = 400;
      next(err);
    } else {
      res.status(204).send(category)
    }
  })
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

// get product by id
router.get('/:id', (req, res, next) => {
  res.json(req.requestedProduct);
})

// ADMIN: post new product
router.post('/', (req, res, next) => {
  Product.create(req.body)
  // Product.create(req.body)
  .then((createdproduct) => {
    res.json(createdproduct);
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


module.exports = router;
