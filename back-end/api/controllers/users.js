const User = require('../models/user');
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
