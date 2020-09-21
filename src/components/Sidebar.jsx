import React, { useEffect, useState } from "react";
import SidebarNote from "./SidebarNote";
import axios from "axios";

export default function Sidebar() {
  function renderNotes() {
    return notes.map((note) => (
      <SidebarNote
        deleteNote={deleteNote}
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
    return notes;
  }

  async function addNote() {
    const newNote = {
      title: "New note.",
      body: "This is a new note.",
    };
    await axios.post(`api/notes`, newNote);
    const newNotes = await getNotes();
    setNotes(newNotes);
  }

  function deleteNote(id) {
    axios.delete(`api/notes/${id}`);
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div id="sidebar">
      {renderNotes()}
      <div
        role="button"
        tabIndex="0"
        id="sidebar-add-note-button"
        onKeyDown={() => {}} // TODO: Accessiblity
        onClick={addNote}
      >
        <p>
          <span role="img" aria-label="delete button">
            ➕
          </span>
        </p>
      </div>
    </div>
  );
}
