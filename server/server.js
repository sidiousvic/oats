const express = require("express");
const path = require("path");
const app = express();

const morgan = require("morgan");

const api = require("../controllers");

app.use(morgan("dev"));

app.use("/api", express.json(), express.urlencoded({ extended: true }), api);

app.use(express.static(path.join(__dirname, "../build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

module.exports = app;

/* Questions
  1. What is morgan and why do you need it?
  2. What is body parser?
  3. What is "app.use(express.static(path.join(__dirname, '../build')));" doing?

  Your Answer Here
*/
