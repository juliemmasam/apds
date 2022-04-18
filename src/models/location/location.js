const {mongoose} = require('../../db/connection');
const uniqueValidator = require('mongoose-unique-validator');

const District = new mongoose.Schema({
  district_name: {
    type: String,
    unique: true
  }
});

District.plugin(uniqueValidator);

const Region = new mongoose.Schema({
  region_name: {
    type: String,
    unique: true
  },
  districts: [District]
});

Region.plugin(uniqueValidator);

const Country = new mongoose.Schema({
  country_name: {
    type: String,
    required: [true, 'The country name is required'],
    unique: true
  },
  regions: [Region]
});

Country.plugin(uniqueValidator);

const Location = mongoose.model('location', Country);

module.exports = { Location };
