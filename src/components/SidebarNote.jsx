import React from "react";

export default function Note({ title, body }) {
  return (
    <div className="sidebar-note">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
