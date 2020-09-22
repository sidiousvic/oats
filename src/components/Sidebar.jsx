import React, { useContext } from "react";
import { OatsContext } from "./Oats";
import SidebarNotes from "./SidebarNotes";
import AddNoteButton from "./AddNoteButton";

export default function Sidebar() {
  const { addNote } = useContext(OatsContext);
  return (
    <>
      <div id="sidebar">
        <h1 id="sidebar-title">Oats</h1>
        <SidebarNotes />
        <AddNoteButton emoji={"+"} onClickHandler={addNote} />
      </div>
    </>
  );
}
