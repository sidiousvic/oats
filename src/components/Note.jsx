import React from "react";
import { useContext } from "react";
import { useEffect, useRef } from "react";
import { OatsContext } from "./Oats";

export default function Note({ activeNote }) {
  const { setActiveNote, updateNote } = useContext(OatsContext);
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
