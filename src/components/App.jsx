import React, { useEffect, useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import Sidebar from "./Sidebar";
import Note from "./Note";

export default function App() {
  const useNotes = useContext(NotesContext);
  const { getNotes, autoSaveNote } = useNotes();

  useEffect(getNotes, [getNotes]);
  useEffect(autoSaveNote);

  return (
    <div id="app">
      <Sidebar />
      <Note />
    </div>
  );
}
