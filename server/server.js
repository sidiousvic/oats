const express = require("express");
const app = express();
const morgan = require("morgan");
const api = require("../controllers");

app.use(morgan());
app.use("/api", express.json(), express.urlencoded({ extended: true }), api);

module.exports = app;
