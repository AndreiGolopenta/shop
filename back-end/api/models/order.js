const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orderBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  date: { type: Number, require: true },
  total: { type: Number, require: true },
  orderContent: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      size: { type: String, required: true },
      quantity: { type: Number, required: true }
    }
  ]
});

module.exports = mongoose.model('Order', orderSchema);