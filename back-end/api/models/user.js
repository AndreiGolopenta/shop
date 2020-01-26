const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  email: { type: String, required: true },
  password: { type: String, required: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  address: { type: String, require: true }
});

module.exports = mongoose.model('User', userSchema);