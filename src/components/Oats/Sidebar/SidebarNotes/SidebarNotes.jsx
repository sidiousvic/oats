import React, { useContext } from "react";
import { OatsContext } from "../../Oats.jsx";
import SidebarNote from "./SidebarNote/SidebarNote.jsx";

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
