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

//* same using 
//? JSX is not HTML
// JSX is HTML/XML like syntax extension for JavaScript
// JSX is not a part of react
// JSX is not a valid JavaScript
// js engine can't understand JSX
// but parcel < babel run in properly

const jsxHeading = <h1 id="heading">Hello, React! using JSX🚀</h1>;

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(jsxHeading);

console.log(heading);
console.log(jsxHeading);
// both are objects and same
