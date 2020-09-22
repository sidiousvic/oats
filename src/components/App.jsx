import React, { useEffect } from "react";
import Sidebar from "./Sidebar";
import Note from "./Note";
import useNotes from "../hooks/useNotes";

export default function App() {
  const {
    notes,
    activeNote,
    setActiveNote,
    savingNote,
    getNotes,
    addNote,
    deleteNote,
    autoSaveNote,
    updateNote,
  } = useNotes();

  useEffect(getNotes, [getNotes]);
  useEffect(autoSaveNote);

  return (
    <div id="app">
      <Sidebar
        savingNote={savingNote}
        notes={notes}
        addNote={addNote}
        activeNote={activeNote}
        deleteNote={deleteNote}
        setActiveNote={setActiveNote}
      />
      <Note
        savingNote={savingNote}
        setActiveNote={setActiveNote}
        updateNote={updateNote}
        activeNote={activeNote}
      />
    </div>
  );
}
