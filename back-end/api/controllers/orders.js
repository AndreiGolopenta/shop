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
    const orderBy = req.params.userId;
    const response = await Order.find({ orderBy })
      .populate('orderBy', 'email')
      .populate('orderContent.product', 'name')
      .exec();
    res.status(200).json({
      count: response.length,
      orders: response
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
