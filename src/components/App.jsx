import React, { useState, useEffect, useCallback } from "react";
import Sidebar from "./Sidebar";
import Note from "./Note";
import axios from "axios";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({
    title: "Welcome to Oats! 👽 ✏️",
    body: "👈🏼 Select a note",
  });
  const [saving, setSaving] = useState(false);

  const getNotes = useCallback(() => {
    async function getNotes() {
      const response = await fetch("/api/notes");
      const notes = await response.json();
      console.log("Notes gotten!", notes);
      setNotes(notes);
    }
    getNotes();
  }, []);
  useEffect(() => {
    getNotes();
  }, [getNotes]);
  async function addNote() {
    const newNote = {
      title: "New note.",
      body: "This is a new note.",
    };
    await axios.post(`api/notes`, newNote);
    console.log("Note added!", newNote);
    getNotes();
  }
  function deleteNote(id) {
    axios.delete(`api/notes/${id}`);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (activeNote.id) updateNote(activeNote.id);
    }, 3000);
    return () => clearInterval(autoSaveInterval);
  });

  async function updateNote(id) {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
    }, 1000);
    if (id) {
      await axios.patch(`api/notes/${id}`, activeNote);
      console.log("Note updated!", id);
    }
    getNotes();
  }

  return (
    <div id="app">
      <Sidebar
        saving={saving}
        notes={notes}
        addNote={addNote}
        activeNote={activeNote}
        deleteNote={deleteNote}
        setActiveNote={setActiveNote}
      />
      <Note
        saving={saving}
        setActiveNote={setActiveNote}
        updateNote={updateNote}
        activeNote={activeNote}
      />
    </div>
  );
}
