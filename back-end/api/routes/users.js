const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.post('/signUp', userController.sign_up);
router.post('/signIn', userController.sign_in);

module.exports = router;