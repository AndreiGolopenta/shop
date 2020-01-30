const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders');
const userAuth = require('../middleware/user-auth');

router.post('/', userAuth, ordersController.create_order);
router.get('/', userAuth, ordersController.get_orders_for_user);

module.exports = router;


