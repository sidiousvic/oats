import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import { OatsContext } from "../../Oats";

export default function Note() {
  const {
    notesCache,
    setNotesCache,
    updateNote,
    activeNoteId,
    getActiveNote,
  } = useContext(OatsContext);

  const welcomeNote = {
    title: "Welcome to Oats! 👽 ✏️",
    body:
      "A slick notes app.                                      \n\n➕ Add a note\n👆🏼 Select a note\n❌ Delete a note\n💾 Save your note",
    id: "0",
  };

  function saveNoteOnCommandPlusS(e) {
    if (
      (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) &&
      e.keyCode === 83
    ) {
      e.preventDefault(); // override browser's CMD + S
      updateNote(activeNoteId);
    }
  }
  function setNoteToCache() {
    const newNotes = notesCache.map((note) => {
      if (note.id === activeNote.id) {
        return {
          id: activeNote.id,
          title: noteTitleRef.current.value,
          body: noteBodyRef.current.value,
        };
      } else return note;
    });
    setNotesCache(newNotes);
  }

  const noteTitleRef = useRef();
  const noteBodyRef = useRef();

  const activeNote = getActiveNote(activeNoteId) || welcomeNote;

  return (
    <>
      <div id="note" onBlur={updateNote}>
        <textarea
          ref={noteTitleRef}
          id="note-title"
          value={activeNote.title && activeNote.title}
          onKeyDown={saveNoteOnCommandPlusS}
          onChange={setNoteToCache}
        />
        <textarea
          ref={noteBodyRef}
          id="note-body"
          value={activeNote.body && activeNote.body}
          onKeyDown={saveNoteOnCommandPlusS}
          onChange={setNoteToCache}
        />
      </div>
    </>
  );
}
