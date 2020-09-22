import React from "react";
import { useEffect, useRef } from "react";

export default function Note({ activeNote, NotesAPI }) {
  const { setActiveNote, updateNote } = NotesAPI;
  const noteTitleRef = useRef();
  const noteBodyRef = useRef();

  useEffect(() => {
    setActiveNote({
      id: activeNote.id,
      title: noteTitleRef.current.value,
      body: noteBodyRef.current.value,
    });
  }, [setActiveNote, activeNote.id]);

  return (
    <>
      <div
        id="note"
        onBlur={() => {
          updateNote(activeNote.id);
        }}
      >
        <textarea
          disabled={!activeNote.id}
          ref={noteTitleRef}
          id="note-title"
          value={activeNote.title && activeNote.title}
          onChange={(e) => {
            setActiveNote({
              id: activeNote.id,
              title: e.target.value,
              body: activeNote.body,
            });
          }}
        />
        <textarea
          disabled={!activeNote.id}
          ref={noteBodyRef}
          id="note-body"
          value={activeNote.body && activeNote.body}
          onChange={(e) => {
            setActiveNote({
              id: activeNote.id,
              title: activeNote.title,
              body: e.target.value,
            });
          }}
        />
      </div>
    </>
  );
}
