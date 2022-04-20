const express = require('express');
const regionFunctions = require('../models/location/regionFunctions');

const regionApis = express.Router();

regionApis.route('/')
.get(async (req, res)=>{
  regionFunctions.getAllRegions()
  .then(results => res.send(results))
  .catch(err => res.send(err.errors));
})
.post(async (req, res)=>{
  regionFunctions.addRegion(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
})
// .delete(async (req, res) => {
//   regionFunctions.deleteRegion(req.body)
//   .then(response => res.send(response))
//   .catch(err => res.send(err.errors));
// })
// .put(async (req, res) => {
//   regionFunctions.updateRegion(req.body)
//   .then(response => res.send(response))
//   .catch(err => res.send(err.errors));
// });

// regionApis.route('/exists')
// .post(async (req, res) => {
//   regionFunctions.countryExists(req.body)
//   .then(response => res.send(response))
//   .catch(err => res.send(err.errors));
// });

module.exports = { regionApis };
