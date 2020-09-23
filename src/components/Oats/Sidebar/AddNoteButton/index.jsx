import React from "react";

export default function AddNoteButton({ emoji, onClickHandler }) {
  return (
    <div
      id="add-note-button"
      role="button"
      className="button"
      tabIndex="0"
      onKeyDown={() => {}} // TODO: Accessiblity
      onClick={onClickHandler}
    >
      <p>
        <span role="img" aria-label="button">
          {emoji}
        </span>
      </p>
    </div>
  );
}
