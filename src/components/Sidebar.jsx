import React, { useEffect, useState } from "react";
import SidebarNote from "./SidebarNote";

export default function Sidebar() {
  function renderNotes() {
    return notes.map((note) => (
      <SidebarNote
        key={note.id}
        title={note.title}
        id={note.id}
        body={note.body}
      />
    ));
  }

  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const response = await fetch("/api/notes");
    const notes = await response.json();
    setNotes(notes);
  }

  useEffect(getNotes, []);

  return <div id="sidebar">{renderNotes()}</div>;
}
