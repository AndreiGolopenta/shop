const express = require('express');
const router = express.Router();
const searchProductsController = require('../controllers/searchProducts');

router.get('/', searchProductsController.search_products);

module.exports = router;