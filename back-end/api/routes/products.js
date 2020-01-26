const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products');

router.post('/', productsController.upload_db);
router.patch('/:id', productsController.update_product);
router.get('/', productsController.get_products);
router.get('/categories', productsController.get_four_products_per_category);
router.get('/:productId', productsController.get_product_by_id);

module.exports = router;
