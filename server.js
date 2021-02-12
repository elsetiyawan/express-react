"use strict";

const http = require("http");
const { port } = require("./api/config/env");
const app = require("./api/config/express");
const { dbConnect } = require("./api/config/mongoose");
const server = http.createServer(app);

server.listen(port);

server.on("listening", () => {
  dbConnect();
  console.log("Server is up and listening on port : " + port);
});

module.exports = server;
