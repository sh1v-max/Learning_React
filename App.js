//* importing react
import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => creates a new element
//* this creates a new react element and not a html element
// which when renders on dom, gets converted to html element

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello, React!🚀"
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);