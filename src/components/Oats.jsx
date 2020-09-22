import React, { useState, useEffect, createContext } from "react";
import Sidebar from "./Sidebar";
import Note from "./Note";
import axios from "axios";

export const OatsContext = createContext();
const OatsProvider = OatsContext.Provider;

export default function Oats() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({
    title: "Welcome to Oats! 👽 ✏️",
    body: "👈🏼 Select a note",
    id: "0",
  });
  const [savingNote, setSavingNote] = useState(false);
  const [savedNotesAt, setSavedNotesAt] = useState(Date.now());

  useEffect(() => {
    async function getAndSetNotes() {
      const response = await fetch("/api/notes");
      const notes = await response.json();
      // console.log("Notes gotten!", notes.length);
      setNotes(notes);
    }
    getAndSetNotes();
  }, [savedNotesAt]);

  // useEffect(autoSaveNote, [savedNotesAt]);

  async function addNote() {
    const newNote = {
      title: "New note.",
      body: "This is a new note.",
    };
    await axios.post(`api/notes`, newNote);
    // console.log("Note added!", newNote.title);
    setSavedNotesAt(Date.now());
  }
  async function deleteNote(id) {
    await axios.delete(`api/notes/${id}`);
    // console.log("Note deleted!", notes.find((note) => note.id === id).title);
    setSavedNotesAt(Date.now());
  }
  function autoSaveNote() {
    const autoSaveInterval = setInterval(() => {
      if (activeNote.id) updateNote(activeNote.id);
    }, 3000);
    return () => clearInterval(autoSaveInterval);
  }

  async function updateNote(id) {
    displaySavingNote();
    await axios.patch(`api/notes/${id}`, activeNote);
    // console.log("Note updated!", id);
    setSavedNotesAt(Date.now());
  }

  function displaySavingNote() {
    setSavingNote(true);
    setTimeout(() => {
      setSavingNote(false);
    }, 500);
  }

  const OatsAPI = {
    notes,
    savingNote,
    activeNote,
    setNotes,
    setActiveNote,
    savedNotesAt,
    setSavedNotesAt,
    addNote,
    deleteNote,
    autoSaveNote,
    updateNote,
  };

  return (
    <OatsProvider value={OatsAPI}>
      <div id="oats">
        <Sidebar notes={notes} activeNote={activeNote} NotesAPI={OatsAPI} />
        <Note activeNote={activeNote} NotesAPI={OatsAPI} />
      </div>
    </OatsProvider>
  );
}
