const express = require('express');
const bodyParser = require('body-parser');

const { countryApis } = require('./api/country');

const server = express();
const port = 3000;

server.use(bodyParser.json());
server.use('/country', countryApis);

server.listen(port, ()=>{
  console.log("The server is actively listening");
});
