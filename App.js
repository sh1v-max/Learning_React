//* importing react
import React from "react";
import ReactDOM from "react-dom/client";

//* how to create element using react
// use React.createElement('tag name', { id: "heading"  here we give attributes}, 'content inside tag')
const heading = React.createElement(
  'h1',
  { id: 'heading' /* here we give attributes*/ },
  'Hello world from React'
)


// root.render(heading)
// console.log(heading) // it will return an object
// this was the simple syntax to create only 1 element

//* how to create nested element
/**
 *<div class="parent">
 *  <div class="child">
 *    <h1>i'm h1 tag</h1>
 *  </div>
 *</div>
 */

const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement(
    'div',
    { id: 'child' },
    React.createElement('h1', {}, "i'm an h1 tag")
  )
)

// root.render(parent)
// calling root.render replaces the existing content inside the root container
// since we are calling root.render(heading) first and then root.render(parent)
// it overwrites the previous render

//? parent is a react element
// which is object
// and then this react object becomes HTML that the browser understand

// React.createElement doesn't create HTML

//* how to create siblings

const parent2 = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "i'm an h1 tag"),
    React.createElement('h2', {}, "i'm an h2 tag"),
  ])
  // you wrap them inside an array
)

// root.render(parent2)

// other example
// using array
const parent3 = React.createElement(
  'div',
  { id: 'parent' },
  [
    React.createElement('div', { id: 'child' }, [
      React.createElement('h1', {}, "i'm an h1 tag"),
      React.createElement('h2', {}, "i'm an h2 tag"),
    ]),
    React.createElement('div', { id: 'child2' }, [
      React.createElement('h1', {}, "i'm an h1 tag"),
      React.createElement('h2', {}, "i'm an h2 tag"),
    ]),
  ]
  // you wrap them inside an array
)

// it does make our code look hard to understand
// that's why we use jsx, but this is the core of react
// we will no longer be using React.createElement

const root = ReactDOM.createRoot(document.getElementById('root'))
// root is ReactDOMRoot {}
root.render(parent3)