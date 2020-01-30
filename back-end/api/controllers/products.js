const Product = require('../models/product');

exports.update_product = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { propName, value } = req.body;
    const update = { [propName]: value };
    await Product.updateOne({ _id: id }, { $set: update }).exec();
    res.status(200).json({ message: 'Product was updated' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.get_four_products_per_category = async (req, res, next) => {
  try {
    const response = {};
    for (let prop in req.query) {
      const products = await Product.find({ category: req.query[prop] })
        .limit(4)
        .select(' name image ')
        .exec();
      response[prop] = products;
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.upload_db = async (req, res, next) => {
  try {
    const response = await Product.insertMany(req.body.products);
    res.status(201).json({ message: 'Upload successful' });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

exports.get_products = async (req, res, next) => {
  try {
    const { category } = req.query;
    const { price, ...rest } = req.query;
    let filters = {};
    for (let prop in rest) {
      filters = { ...filters, [prop]: rest[prop] };
    }
    let response;
    if (price) {
      response = await Product.find(filters)
        .sort({ price })
        .exec();
    } else {
      response = await Product.find(filters).exec();
    }
    const stock = await Product.find({ category }).exec();
    res.status(200).json({ stock: stock.length, data: response });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.get_product_by_id = async (req, res, next) => {
  try {
    const id = req.params.productId;
    const response = await Product.findById(id).exec();
    return res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
