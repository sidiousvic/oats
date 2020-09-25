import React, { useContext } from "react";
import { OatsContext } from "../../Oats";
import SidebarNotes from "./SidebarNotes";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";

export default function Sidebar() {
  const { addNote, activeNoteId } = useContext(OatsContext);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [orientedLandscape, setOrientedLandscape] = useState(
    Math.abs(window.screen.orientation.angle === 90
  );
  const sideBarExitEmoji = activeNoteId === "0" ? "🔙" : "✏️";

  function closeMobileSidebar() {
    setMobileSidebarOpen(false);
    setOrientedLandscape(Math.abs(window.screen.orientation.angle === 90));
  }

  function openMobileSidebar() {
    setMobileSidebarOpen(true);
    setOrientedLandscape(Math.abs(window.screen.orientation.angle === 90));
  }

  function closeSideBarOnOrientationChange() {
    window.addEventListener("orientationchange", closeMobileSidebar);
    return () =>
      window.removeEventListener("orientationchange", closeMobileSidebar);
  }

  useEffect(closeSideBarOnOrientationChange, []);

  return (
    <>
      <div
        id="sidebar"
        role="textbox"
        className={mobileSidebarOpen ? "mobile-sidebar-open" : ""}
        tabIndex="0"
        onKeyDown={() => {}} /**@todo Accessibility */
        onTouchStart={() => {
          if (!orientedLandscape) openMobileSidebar();
        }}
      >
        <h1 id="sidebar-title">Oats</h1>
        <h3 id="sidebar-subtitle">
          by <a href="https://www.github.com/sidiousvic">sidiousvic</a>
        </h3>
        <SidebarNotes />
        <Button emoji={"🌾"} onClickHandler={addNote} />
        {mobileSidebarOpen && (
          <Button
            emoji={sideBarExitEmoji}
            onClickHandler={closeMobileSidebar}
          />
        )}
      </div>
    </>
  );
}
