const express = require("express");
const server = express();
const sushi = require("./src/data/sushi.json");

server.get("/sushi", (req, res) => {
  return res.json(sushi);
});

server.listen(3002, () => {
  console.log("API running, Port 3002");
});
