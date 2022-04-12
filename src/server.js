const express = require("express");

const server = express();
const port = 3000;

server.get('/', (req, res)=>{
  res.send("Hello!")
})

server.listen(port, ()=>{
  console.log("The server is actively listening");
})
