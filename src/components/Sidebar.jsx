import React, { useContext } from "react";
import { OatsContext } from "./Oats";
import SidebarNotes from "./SidebarNotes";
import AddNoteButton from "./AddNoteButton";
import { useState } from "react";

export default function Sidebar() {
  const { addNote } = useContext(OatsContext);
  const [touched, setTouched] = useState(false);

  return (
    <>
      <div
        id="sidebar"
        role="button"
        className={touched ? "sidebar-touched" : ""}
        tabIndex="0"
        onKeyDown={() => {}} // TODO: Accessiblity
        onFocus={() => {
          setTouched(true);
        }}
        onMouseLeave={() => {
          setTouched(false);
        }}
      >
        <h1 id="sidebar-title">Oats</h1>
        <SidebarNotes />
        <AddNoteButton emoji={"+"} onClickHandler={addNote} />
      </div>
    </>
  );
}
