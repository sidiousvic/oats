import React from "react";

export default function Button({ emoji, onClickHandler }) {
  return (
    <div
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
