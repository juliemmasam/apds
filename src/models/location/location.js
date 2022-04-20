const {mongoose} = require('../../db/connection');
const uniqueValidator = require('mongoose-unique-validator');

const District =  new mongoose.Schema({
  country_id: Object,
  region_id: Object,
  district_name: {
    type: String,
    required: [true, 'The district_name is required']
  }
});

const Region = new mongoose.Schema({
  country_id: {
    type: Object,
    required: [true, 'The country_id is required']
  },
  region_name: {
    type: String,
    required: [true, 'The region_name is required'],
    unique: true
  }
});

const Country = new mongoose.Schema({
  country_code: {
    type: String,
    required: [true, 'The country_code is required'],
    unique: [true, 'The country_code should be unique']
  },
  country_name: {
    type: String,
    required: [true, 'The country name is required'],
  }
});

District.plugin(uniqueValidator);
Region.plugin(uniqueValidator);
Country.plugin(uniqueValidator);

const Districts = mongoose.model('districts', District);
const Regions = mongoose.model('regions', Region);
const Countries = mongoose.model('countries', Country);

module.exports = { Districts, Regions, Countries };
