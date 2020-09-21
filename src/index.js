import ReactDOM from "react-dom";
import React from "react";

// test proxy to express server @ 4000
fetch("/api/hello")
  .then((res) => {
    console.warn(res);
    return res.json();
  })
  .then((json) => console.warn(json));

ReactDOM.render(<h1>Hello Assessment!</h1>, document.getElementById("root"));
