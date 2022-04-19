const express = require('express');
const functions = require('../models/location/functions');

const countryApis = express.Router();

countryApis.route('/')
.get(async (req, res)=>{
  functions.getAllCountries()
  .then(results => res.send(results))
  .catch(err => res.send(err.errors));
})
.post(async (req, res)=>{
  functions.addCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
})
.delete(async (req, res) => {
  functions.deleteCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
})
.put(async (req, res) => {
  functions.updateCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
});

module.exports = { countryApis };
