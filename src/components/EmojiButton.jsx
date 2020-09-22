import React from "react";

export default function EmojiButton({ emoji, onClickHandler }) {
  return (
    <div
      role="button"
      tabIndex="0"
      id="sidebar-add-note-button"
      onKeyDown={() => {}} // TODO: Accessiblity
      onClick={onClickHandler}
    >
      <p>
        <span role="img" aria-label="delete button">
          {emoji}
        </span>
      </p>
    </div>
  );
}
