const express = require('express');
const bodyParser = require('body-parser');
const functions = require('./models/location/functions');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.get('/', async (req, res)=>{
  functions.getAllCountries()
  .then(results => res.send(results))
  .catch(err => res.send(err.errors));
});

server.post('/', async (req, res)=>{
  functions.addCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
});

server.delete('/', async (req, res) => {
  functions.deleteCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
});

server.put('/', async (req, res) => {
  functions.updateCountry(req.body)
  .then(response => res.send(response))
  .catch(err => res.send(err.errors));
});

server.listen(port, ()=>{
  console.log("The server is actively listening");
});
