const express = require("express");
const app = express();
const morgan = require("morgan");
const api = require("../controllers");

app.use(morgan("dev"));
app.use("/oats", express.json(), express.urlencoded({ extended: true }), api);

module.exports = app;
