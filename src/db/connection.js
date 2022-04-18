const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/location_test_db');

module.exports = {mongoose};
