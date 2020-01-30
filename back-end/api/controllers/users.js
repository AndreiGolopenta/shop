const User = require('../models/user');
const Order = require('../models/order');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.sign_up = async (req, res, next) => {
  try {
    const { email, password, ...rest } = req.body;
    const checkEmail = await User.find({ email }).exec();
    if (checkEmail.length) {
      return res
        .status(409)
        .json({ message: 'Email already exists in database.' });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);
      const user = new User({
        _id: new mongoose.Types.ObjectId(),
        email,
        password: hashPassword,
        ...rest
      });
      await user.save();
      res.status(201).json('Account Created.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.sign_in = async (req, res, next) => {
  try {
    const failMessage =
      'The email or password did not match. Please try again.';
    const { email, password } = req.body;
    const user = await User.findOne({ email }).exec();
    try {
      const passwordCheck = await bcrypt.compare(password, user.password);
      if (passwordCheck) {
        const token = jwt.sign({ userId: user._id }, 'privateKey', {
          expiresIn: '1h'
        });
        const userName = `${user.firstName} ${user.lastName}`;
        return res.status(200).json({ userName, token });
      } else {
        res.status(401).json({ message: failMessage });
      }
    } catch (err) {
      return res.status(401).json({ message: failMessage });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.get_user_personal_data = async (req, res, next) => {
  try {
    const userId = req.userData.userId;
    const response = await User.findById(userId)
      .select('_id, firstName lastName address')
      .exec();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.edit_user_personal_data = async (req, res, next) => {
  try {
    const userId = req.userData.userId;
    await User.updateOne({ _id: userId }, { $set: req.body }).exec();
    const response = 'Data has been updated.';
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.change_password = async (req, res, next) => {
  try {
    const { currentPassword, password } = req.body;
    const user = await User.findById(req.userData.userId).exec();
    const passwordCheck = await bcrypt.compare(currentPassword, user.password);
    if (passwordCheck) {
      const hashPassword = await bcrypt.hash(password, 10);
      await User.updateOne(
        { _id: req.userData.userId },
        { $set: { password: hashPassword } }
      );
      return res.status(200).json('Password has been updated.');
    } else {
      return res.status(401).json('Please enter your current password.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.delete_user_account = async (req, res, next) => {
  try {
    const userId = req.userData.userId;
    await Order.deleteMany({ orderBy: userId }).exec();
    await User.deleteOne({ _id: userId }).exec();
    res.status(200).json('Your account has been deleted.')
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}