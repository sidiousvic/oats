import React, { useContext } from "react";
import { OatsContext } from "./Oats";
import SidebarNotes from "./SidebarNotes";
import EmojiButton from "./EmojiButton";

export default function Sidebar() {
  console.log("Sidebar rendered");
  const { addNote } = useContext(OatsContext);
  return (
    <>
      <div id="sidebar">
        <h1 id="sidebar-title">Notes</h1>
        <SidebarNotes />
      </div>
      <EmojiButton emoji={"+"} onClickHandler={addNote} />
    </>
  );
}
