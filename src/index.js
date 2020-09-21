import ReactDOM from "react-dom";
import React from "react";
import App from "./components/App";

// test proxy to express server @ 4000
fetch("/api/notes")
  .then((res) => {
    return res.json();
  })
  .then((json) => console.warn("Notes from the database: ", json));

ReactDOM.render(<App />, document.getElementById("root"));
