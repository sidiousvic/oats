import React from "react";
import SidebarNote from "./SidebarNote";

export default function Sidebar({
  addNote,
  deleteNote,
  notes,
  saving,
  activeNote,
  setActiveNote,
}) {
  function renderNotes() {
    return notes.map((note) => (
      <SidebarNote
        saving={saving}
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
