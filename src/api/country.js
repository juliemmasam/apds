const express = require('express');
const countryFunctions = require('../models/location/countryFunctions');

const countryApis = express.Router();

countryApis.route('/')
.get(async (req, res)=>{
  countryFunctions.getAllCountries()
  .then(results => res.send(results))
  .catch(err => res.send(err.errors));
})
.post(async (req, res)=>{
  countryFunctions.addCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
})
.delete(async (req, res) => {
  countryFunctions.deleteCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
})
.put(async (req, res) => {
  countryFunctions.updateCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
});

countryApis.route('/exists')
.post(async (req, res) => {
  countryFunctions.countryExists(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
});

module.exports = { countryApis };
