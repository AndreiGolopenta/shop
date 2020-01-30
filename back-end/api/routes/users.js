const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const userAuth = require('../middleware/user-auth');

router.post('/signUp', userController.sign_up);
router.post('/signIn', userController.sign_in);
router.get('/', userAuth, userController.get_user_personal_data);
router.patch('/', userAuth, userController.edit_user_personal_data);
router.post('/changePassword', userAuth, userController.change_password);
router.delete('/', userAuth, userController.delete_user_account);

module.exports = router;
