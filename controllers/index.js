const express = require("express");
const router = express.Router();
const db = require("../models/db");
const { v4: uuidv4 } = require("uuid");

router.get("/notes", async (_, res) => {
  const notes = await db
    .select()
    .from("notes")
    .orderBy("timestamp");
  res.send(notes);
});

router.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await db("notes")
    .where({ id })
    .delete();
  res.send(`Note with ID ${id} was deleted.`);
});

router.post("/notes", async (req, res) => {
  const { title, body } = req.body;
  const id = uuidv4();
  const note = {
    id,
    title,
    body,
  };
  await db("notes").insert(note);
  res.send(`Note with ID ${id} was deleted.`);
});

router.patch("/notes/:id", async (req, res) => {
  const note = req.body;
  const { id } = req.params;
  await db("notes")
    .where({ id })
    .update(note);
  res.send(`Note with ID ${id} was updated.`);
});

module.exports = router;
