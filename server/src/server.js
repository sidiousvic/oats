const express = require("express");
const app = express();
const morgan = require("morgan");
const notesRouter = require("./routers/notes");

app.use(morgan("dev"));
app.use(
  "/oats",
  express.json(),
  express.urlencoded({ extended: true }),
  notesRouter
);

module.exports = app;
