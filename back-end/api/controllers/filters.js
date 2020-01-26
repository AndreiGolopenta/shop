const Product = require('../models/product');

exports.get_filters = async (req, res, next) => {
  try {
    const filters = req.body.filters;
    const category= req.body.category;
    const response = {};
    const extractFilters = await Product.find({ category })
      .select(filters.join(' '))
      .exec();
    for (let filterName of filters) {
      const data = extractFilters.map((filter, index, arr) => {
        return filter[filterName];
      });
      response[filterName] = data;
    }
    for (let filterName in response) {
      response[filterName] = response[filterName]
        .flat()
        .reduce((previous, current) => {
          return previous.includes(current) ? previous : [...previous, current];
        }, []);
    }
    for (let prop in response) {
      response[prop] = response[prop].map(data => {
        return { name: data, checked: false };
      });
    }
    res.status(200).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
