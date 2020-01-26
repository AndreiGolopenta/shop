const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  category: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  manufacturer: { type: String, required: true },
  season: String,
  version: String,
  purpose: String,
  length: String,
  fit: String,
  for: String,
  material: String,
  description: String,
  price: { type: Number, required: true },
  size: [String]
});

module.exports = mongoose.model('Product', productSchema);

