import React, { useState, useEffect, createContext } from "react";
import Sidebar from "./Sidebar";
import Note from "./Note";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const OatsContext = createContext();
const OatsProvider = OatsContext.Provider;

export default function Oats() {
  const [notesCache, setNotesCache] = useState([]);
  const [activeNoteId, setActiveNoteId] = useState("0");
  const [savedNotesAt, setSavedNotesAt] = useState(Date.now());

  function getActiveNote(id) {
    const activeNote = notesCache.find((note) => note.id === id);
    return activeNote;
  }

  useEffect(
    function setLastNoteAsActiveNote() {
      if (notesCache.length)
        setActiveNoteId(notesCache[notesCache.length - 1].id);
      else setActiveNoteId("0");
    },
    /**@todo: Satisfy exhaustive deps rule
     * This effect should run when notesCache's length changes only.
     * eslint suggests to add notesCache as a dependency to avoid using stale notesCache data,
     * since this doesn't depend on notesCache itself,
     * we cannot be sure whether notesCache has changed across renders.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [notesCache.length]
  );

  useEffect(() => {
    getNotes();
  }, []);

  async function getNotes() {
    const response = await axios.get("/oats/notes");
    const notes = response.data;
    setNotesCache(notes);
  }

  async function addNote() {
    const newNote = {
      id: uuidv4(),
      title: "New note.",
      body: "This is a new note.",
    };
    await axios.post(`/oats/notes`, newNote);
    setNotesCache([...notesCache, newNote]);
  }

  async function deleteNote(id) {
    await axios.delete(`/oats/notes/${id}`);
    setNotesCache(notesCache.filter((note) => note.id !== id));
    setSavedNotesAt(Date.now());
  }

  async function updateNote() {
    const id = activeNoteId;
    const activeNote = getActiveNote(id);
    await axios.patch(`/oats/notes/${id}`, activeNote);
    setNotesCache(
      notesCache.map((note) => {
        if (note.id === id) return activeNote;
        else return note;
      })
    );
    setSavedNotesAt(Date.now());
  }

  const OatsAPI = {
    notesCache,
    setNotesCache,
    activeNoteId,
    setActiveNoteId,
    savedNotesAt,
    setSavedNotesAt,
    getActiveNote,
    addNote,
    deleteNote,
    updateNote,
  };

  return (
    <OatsProvider value={OatsAPI}>
      <div id="oats">
        <Sidebar />
        <Note />
      </div>
    </OatsProvider>
  );
}
