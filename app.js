"use strict";
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes.js");

//Parse JSON and url-encoded data
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));

app.use("/img", routes);

module.exports = app;
