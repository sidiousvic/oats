import React from "react";

export default function Note({ title, body, id, deleteNote }) {
  return (
    <div note-id={id} className="sidebar-note">
      <h1>{title}</h1>
      <p>{body}</p>
      <div
        role="button"
        tabIndex="0"
        className="sidebar-note-del-button"
        onKeyDown={() => {}} // TODO: Accessiblity
        onClick={() => {
          deleteNote(id);
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
