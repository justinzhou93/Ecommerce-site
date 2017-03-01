const router = require('express').Router()
const Product = require('../../db/models/product');
const Category = require('../../db/models/category');
const Review = require('../../db/models/review');

router.param('id', (req, res, next, id) => {
  Product.findbyId(id)
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

router.get('/', (req, res, next) => {
  Product.findAll()
  .then(products => res.send(products))
  .catch(next);
})

router.get('/:id', (req, res, next) => {
  res.send(req.requestedProduct);
})

router.post('/', (req, res, next) => {
  Product.create(req.body)
  .then(newProduct => {
    res.status(201).send(newProduct);
  })
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  req.requestedProduct.update(req.body)
  .then(updatedProduct => {
    res.send(updatedProduct)
  })
  .catch(next);
})

router.delete('/:id', (req, res, next) => {
  req.requestedProduct.destroy()
  .then()
})
