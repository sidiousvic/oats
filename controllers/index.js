const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get("/notes", async (_, res) => {
  const notes = await db.select().from("notes");
  res.send(notes);
});

module.exports = router;
