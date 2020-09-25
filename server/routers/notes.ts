import express, { Request, Response } from "express";
const notesRouter = express.Router();
const db = require("../models/db");

type Note = {
  noteId?: number;
  id: string;
  title: string;
  body: string;
  timestamp?: Date;
};

notesRouter.get("/notes", async (_, res: Response) => {
  const notes: Note = await db
    .select()
    .from("notes")
    .orderBy("timestamp");
  res.send(notes);
});

notesRouter.delete("/notes/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  await db("notes")
    .where({ id })
    .delete();
  res.send(`Note with ID ${id} was deleted.`);
});

notesRouter.post("/notes", async (req, res) => {
  const { title, body, id } = req.body;
  const incomingNewNote: Note = {
    id,
    title,
    body,
  };
  await db("notes").insert(incomingNewNote);
  res.send(`Note with ID ${id} was added.`);
});

notesRouter.patch("/notes/:id", async (req, res) => {
  const note: Note = req.body;
  const { id } = req.params;
  await db("notes")
    .where({ id })
    .update(note);
  res.send(`Note with ID ${id} was updated.`);
});

module.exports = notesRouter;
