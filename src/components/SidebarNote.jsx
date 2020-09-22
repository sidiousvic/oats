import React, { useContext } from "react";
import { OatsContext } from "./Oats";

export default function SidebarNote({ note }) {
  console.log("SidebarNote rendered.");
  const { deleteNote, setActiveNote, savingNote, activeNote } = useContext(
    OatsContext
  );

  const isActiveNote = note.id === activeNote.id;

  function ellipsize(string, limit) {
    const isOverChar = (num) => string.length > num;
    const ellipsis = isOverChar(limit) ? "..." : "";

    return (
      `${string
        .split("")
        .slice(0, limit)
        .join("")}` + ellipsis
    );
  }

  return (
    <div
      role="button"
      tabIndex="0"
      note-id={note.id}
      className={`sidebar-note ${note.id === activeNote.id && "active-note"}`}
      onClick={() => {
        setActiveNote(note);
      }}
      onKeyDown={() => {}} // TODO: Accessiblity
    >
      <h1>
        {isActiveNote
          ? ellipsize(activeNote.title, 25)
          : ellipsize(note.title, 25)}
      </h1>
      <p>
        {isActiveNote
          ? ellipsize(activeNote.body, 50)
          : ellipsize(note.body, 50)}
      </p>
      <div
        role="button"
        tabIndex="0"
        className="sidebar-add-note-button"
        onKeyDown={() => {}} // TODO: Accessiblity
        onClick={() => deleteNote(note.id)}
      >
        <p>
          <span role="img" aria-label="delete button">
            ❌ {isActiveNote && savingNote && "💾"}
          </span>
        </p>
      </div>
    </div>
  );
}
