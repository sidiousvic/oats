import React, { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

export default function Note() {
  const { useNotes } = useContext(NotesContext);
  const { setActiveNote, activeNote, updateNote } = useNotes();
  return (
    <>
      <div id="note">
        <textarea
          id="note-title"
          value={activeNote.title && activeNote.title}
          onChange={(e) => {
            const newNote = {
              id: activeNote.id,
              title: e.target.value,
              body: activeNote.body,
            };
            setActiveNote(newNote);
          }}
        />
        <textarea
          id="note-body"
          value={activeNote.body && activeNote.body}
          onChange={(e) => {
            const newNote = {
              id: activeNote.id,
              title: activeNote.title,
              body: e.target.value,
            };
            setActiveNote(newNote);
          }}
        />
      </div>
      <div
        role="button"
        tabIndex="0"
        id="sidebar-add-note-button"
        onKeyDown={() => {}} // TODO: Accessiblity
        onClick={() => {
          updateNote(activeNote.id);
        }}
      >
        <p>
          <span role="img" aria-label="delete button">
            💾
          </span>
        </p>
      </div>
    </>
  );
}
