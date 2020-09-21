import React, { useEffect, useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);

  async function getNotes() {
    const response = await fetch("/api/notes");
    const notes = await response.json();
    setNotes(notes);
  }

  useEffect(getNotes, []);

  return notes.map((note) => (
    <div key={note.title}>
      <h1>{note.title}</h1>
      <p>{note.body}</p>
    </div>
  ));
}
