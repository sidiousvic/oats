const express = require("express");
const router = express.Router();
const db = require("../models/db");

router.get("/notes", async (_, res) => {
  const notes = await db.select().from("notes");
  res.send(notes);
});

router.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  console.log(req.params);
  await db("notes")
    .where({
      id: id,
    })
    .delete();
  res.send(`Note with ID ${id} was deleted.`);
});

module.exports = router;
