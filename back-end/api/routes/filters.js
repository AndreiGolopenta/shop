const express = require('express');
const router = express.Router();
const filtersControler = require('../controllers/filters');

router.post('/', filtersControler.get_filters);

module.exports = router;
