import React, { useContext } from "react";
import { OatsContext } from "./Oats";
import SidebarNote from "./SidebarNote";

export default function SidebarNotes() {
  const { notesCache } = useContext(OatsContext);

  return (
    <div id="sidebar-note-list">
      {notesCache.map((note) => (
        <SidebarNote key={note.id} note={note} />
      ))}
    </div>
  );
}
