import React from "react";

export default function SidebarNote({
  note,
  deleteNote,
  activeNote,
  setActiveNote,
  saving,
}) {
  const { title, body, id } = note;

  return (
    <div
      role="button"
      tabIndex="0"
      note-id={id}
      className={`sidebar-note ${id === activeNote.id && "active-note"}`}
      onClick={() => {
        setActiveNote(note);
      }}
      onKeyDown={() => {}} // TODO: Accessiblity
    >
      <h1>{title}</h1>
      <p>
        {`${body
          .split("")
          .slice(0, 50)
          .join("")}`}
        {body.length > 50 && "..."}
      </p>
      <div
        role="button"
        tabIndex="0"
        className="sidebar-add-note-button"
        onKeyDown={() => {}} // TODO: Accessiblity
        onClick={() => deleteNote(id)}
      >
        <p>
          <span role="img" aria-label="delete button">
            ❌ {activeNote.id === note.id && saving && "💾"}
          </span>
        </p>
      </div>
    </div>
  );
}
