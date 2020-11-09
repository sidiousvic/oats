const express = require("express");
const app = express();
const morgan = require("morgan");
const notesRouter = require("./routers/notes");

app.use(morgan("dev"));
app.use(
  "/projects/oats",
  express.json(),
  express.urlencoded({ extended: true }),
  notesRouter
);

module.exports = app;
