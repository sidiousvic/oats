import express, { Response } from "express";
const notesRouter = express.Router();
const db = require("../models/db");

notesRouter.get("/notes", async (_, res: Response) => {
  const notes = await db
    .select()
    .from("notes")
    .orderBy("timestamp");
  res.send(notes);
});

notesRouter.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await db("notes")
    .where({ id })
    .delete();
  res.send(`Note with ID ${id} was deleted.`);
});

notesRouter.post("/notes", async (req, res) => {
  const { title, body, id } = req.body;
  const note = {
    id,
    title,
    body,
  };
  await db("notes").insert(note);
  res.send(`Note with ID ${id} was added.`);
});

notesRouter.patch("/notes/:id", async (req, res) => {
  const note = req.body;
  const { id } = req.params;
  await db("notes")
    .where({ id })
    .update(note);
  res.send(`Note with ID ${id} was updated.`);
});

module.exports = notesRouter;
