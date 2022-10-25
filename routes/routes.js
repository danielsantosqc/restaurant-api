const express = require("express");
const user = require("./user_router");
const products = require("./products_router");

function routes (server) {
  
  server.use("/user", user);
  server.use("/products", products);
};

module.exports = routes;
