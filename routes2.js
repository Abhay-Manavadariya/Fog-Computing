"use strict";

const express = require("express");
const api = express.Router();

api.get("/", (req, res) => {
  res.send('Hello From server 2!!')
});

module.exports = api;
