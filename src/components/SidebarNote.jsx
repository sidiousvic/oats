import React, { useContext } from "react";
import { OatsContext } from "./Oats";

export default function SidebarNote({ note: thisNote }) {
  const { deleteNote, setActiveNoteId, activeNoteId } = useContext(OatsContext);

  const isActiveNote = thisNote.id === activeNoteId;

  function truncateWithEllipsis(string, limit) {
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
      noteid={thisNote.id}
      className={`sidebar-note ${isActiveNote && "active-note"}`}
      onFocus={() => {}} // TODO: Accessiblity
      onClick={() => {
        setActiveNoteId(thisNote.id);
      }}
      onKeyDown={() => {}} // TODO: Accessiblity
    >
      <h1>{truncateWithEllipsis(thisNote.title, 25)}</h1>
      <p>{truncateWithEllipsis(thisNote.body, 50)}</p>
      <div
        id="delete-note-button"
        role="textbox"
        tabIndex="0"
        className="button"
        onKeyDown={() => {}} // TODO: Accessiblity
        onClick={() => {
          deleteNote(thisNote.id);
        }}
      >
        <p>
          <span role="img" aria-label="delete button">
            ❌
          </span>
        </p>
      </div>
    </div>
  );
}
