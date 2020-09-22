import { useState, useCallback } from "react";
import axios from "axios";

export default function useNotes() {
  const [notes, setNotes] = useState([]);
  const [activeNote, setActiveNote] = useState({
    title: "Welcome to Oats! 👽 ✏️",
    body: "👈🏼 Select a note",
  });
  const [savingNote, setSavingNote] = useState(false);
  const getNotes = useCallback(() => {
    async function getNotes() {
      const response = await fetch("/api/notes");
      const notes = await response.json();
      console.log("Notes gotten!", notes);
      setNotes(notes);
    }
    getNotes();
  }, []);
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
  function autoSaveNote() {
    const autoSaveInterval = setInterval(() => {
      if (activeNote.id) updateNote(activeNote.id);
    }, 3000);
    return () => clearInterval(autoSaveInterval);
  }
  async function updateNote(id) {
    setSavingNote(true);
    setTimeout(() => {
      setSavingNote(false);
    }, 1000);
    if (id) {
      await axios.patch(`api/notes/${id}`, activeNote);
      console.log("Note updated!", id);
    }
    getNotes();
  }
  return {
    notes,
    setNotes,
    activeNote,
    setActiveNote,
    savingNote,
    setSavingNote,
    getNotes,
    addNote,
    deleteNote,
    autoSaveNote,
    updateNote,
  };
}
