const Order = require('../models/order');
const mongoose = require('mongoose');

exports.create_order = async (req, res, next) => {
  try {
    const createdOrder = new Order({
      _id: new mongoose.Types.ObjectId(),
      orderBy: req.userData.userId,
      ...req.body
    });
    await createdOrder.save();
    res.status(201).json({ message: 'Thank you for your order.' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.get_orders_for_user = async (req, res, next) => {
  try {
    const orderBy = req.userData.userId;
    const response = await Order.find({ orderBy })
      .populate('orderContent.product', 'name image')
      .exec();
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
