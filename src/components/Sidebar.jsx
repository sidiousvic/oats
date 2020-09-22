import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";
import SidebarNote from "./SidebarNote";

export default function Sidebar() {
  const useNotes = useContext(NotesContext);
  const {
    addNote,
    deleteNote,
    notes,
    savingNote,
    activeNote,
    setActiveNote,
  } = useNotes();

  function renderNotes() {
    return notes.map((note) => (
      <SidebarNote
        savingNote={savingNote}
        key={note.id}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        deleteNote={deleteNote}
        note={note}
      />
    ));
  }
  return (
    <>
      <div id="sidebar">
        <h1 id="sidebar-title">Notes</h1>
        <div id="sidebar-note-list">{renderNotes()}</div>
      </div>
      <div
        role="button"
        tabIndex="0"
        id="sidebar-add-note-button"
        onKeyDown={() => {}} // TODO: Accessiblity
        onClick={addNote}
      >
        <p>
          <span role="img" aria-label="delete button">
            +
          </span>
        </p>
      </div>
    </>
  );
}
