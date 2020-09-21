import ReactDOM from "react-dom";
import React from "react";

// test proxy to express server @ 4000
fetch("/api/notes")
  .then((res) => {
    return res.json();
  })
  .then((json) => console.warn("Notes from the database: ", json));

ReactDOM.render(<h1>Hello Assessment!</h1>, document.getElementById("root"));
