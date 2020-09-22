import React, { useState, useEffect, createContext } from "react";
import Sidebar from "./Sidebar";
import Note from "./Note";
import axios from "axios";

export const OatsContext = createContext();
const OatsProvider = OatsContext.Provider;

export default function Oats() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({});
  const [savedNotesAt, setSavedNotesAt] = useState(Date.now());

  useEffect(() => {
    async function getAndSetNotes() {
      const response = await fetch("/api/notes");
      const notes = await response.json();
      setNotes(notes);
    }
    getAndSetNotes();
  }, [savedNotesAt]);

  async function addNote() {
    const newNote = {
      title: "New note.",
      body: "This is a new note.",
    };
    await axios.post(`api/notes`, newNote);
    setSavedNotesAt(Date.now());
  }
  async function deleteNote(id) {
    await axios.delete(`api/notes/${id}`);
    setSavedNotesAt(Date.now());
  }
  function autoSaveNote() {
    const autoSaveInterval = setInterval(() => {
      if (activeNote.id) updateNote(activeNote.id);
    }, 3000);
    return () => clearInterval(autoSaveInterval);
  }
  async function updateNote(id) {
    await axios.patch(`api/notes/${id}`, activeNote);
    setSavedNotesAt(Date.now());
  }

  const OatsAPI = {
    notes,
    activeNote,
    setActiveNote,
    setNotes,
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
        <Sidebar notes={notes} activeNote={activeNote} />
        <Note activeNote={activeNote} />
      </div>
    </OatsProvider>
  );
}
