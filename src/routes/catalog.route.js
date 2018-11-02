const router = require('express').Router();
const products = require('../../db/products.json');
const { log, newError } = require('../helpers');

router.get('/all', (req, res) => {
  res.json({ length: products.length, products });
});

router.get('/product/:id', (req, res, next) => {
  const result = products
    .filter(product => product._id === req.params.id);
  res.json({ product: result });
});

module.exports = router;