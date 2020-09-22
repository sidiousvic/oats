import ReactDOM from "react-dom";
import React from "react";
import { NotesProvider } from "./contexts/NotesContext";
import useNotes from "./hooks/useNotes";
import App from "./components/App";
import "./styles.css";

ReactDOM.render(
  <NotesProvider value={useNotes}>
    <App />
  </NotesProvider>,
  document.getElementById("root")
);
