import React from 'react'
import ReactDOM from 'react-dom/client'

//================================================================================================
//* react element
// react element is a plain object that represents a dom element
// React.createElement => creates a new element
//? this creates a new react element and not a html element
// which when renders on dom, gets converted to html element

const heading = React.createElement('h1', { id: 'heading' }, 'Hello, React!🚀')

//? same using JSX
// JSX is not HTML
// babel transpile it to react
// JSX is HTML/XML like syntax extension for JavaScript
// JSX is not a part of react
// JSX is not a valid JavaScript
// js engine can't understand JSX
// but parcel <. babel run it properly

// const jsxHeading = <h1 id="heading">Hello, React! using JSX🚀</h1>;
const jsxHeading = <h1 className="head">Hello, React! using JSX🚀</h1>
// giving class using jsx as className, but not class...... it's not html
//? to add attribute in jsx, use camelCase

//? multiple line in jsx
const heading0 = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
)
// for multiple line, we need to wrap in ()

//================================================================================================
//* react component
// Functional component - new way of writing component 
// Class component - old way of writing component

//& react functional component
// functional component is a function that returns a react element or JSX
// we should always start component name with capital letter

//? HeadingComponent is a functional component
// example 1
const HeadingComponent  = () => {
  return <h1>Hello, React! using functional component🚀</h1>
}

// example 2
const HeadingComponent2  = () => (
  <h1 className = "heading">Hello, React! using functional component🚀</h1>
)
// if we want to return multiple line or add attributes, we need to wrap in ()

// example 3
const HeadingComponent3  = () => <h1>Hello, React! using functional component🚀</h1>
// short hand syntax of arrow function

// example 4
const HeadingComponent4  = () => (
  <div id = "container">
    <h1 className = "heading">Hello, React! using functional component🚀</h1>
    <h2>Line 2</h2>
  </div>
)
// two or more sibling require a wrapping parent element, we can use <></> or <div></div>

// example 5
const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}

const HeadingComponent5 = function (){
  return (
    <div>
      <Title/>
      {/* we can also use <Title()> */}
      {/* we can also use <Title></Title> */}
      {console.log(10)}
    <h1>Namaste React Functional component</h1>
    <h2>This is h2 tag</h2>
    </div>
  )
}

//! change the name of the react element with capital letter and make it an arrow function to change it into a react component
// react element
const heading00 = (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
)

// react component
const Heading00 = () => (
  <h1 id="h1" key="h1">
    This is JSX
  </h1>
)

//================================================================================================
//* rendering react element
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);
root.render(jsxHeading)

// we can not render react component like react element
// we need to wrap it in < />
root.render(<HeadingComponent4/>)

// console.log(heading)
// console.log(jsxHeading)
