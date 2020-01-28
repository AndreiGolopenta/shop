const Product = require('../models/product');

exports.search_products = async (req, res, next) => {
  try {
    const { search } = req.query;
    const products = await Product.find({
      name: { $regex: search, $options: 'i' }
    });
    res.status(200).json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
