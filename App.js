//* importing react
import React from 'react'
import ReactDOM from 'react-dom/client'

// React.createElement => creates a new element
//* this creates a new react element and not a html element
// which when renders on dom, gets converted to html element

const heading = React.createElement('h1', { id: 'heading' }, 'Hello, React!🚀')

//* same using
//? JSX is not HTML
//& babel transpile it to react
// JSX is HTML/XML like syntax extension for JavaScript
// JSX is not a part of react
// JSX is not a valid JavaScript
// js engine can't understand JSX
// but parcel < babel run in properly

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


//* react component
// Functional component - new way of writing component 
// Class component - old way of writing component

//? react functional component
// functional component is a function that returns a react element or JSX
// we should always start component name with capital letter

//^ HeadingComponent is a functional component
const HeadingComponent  = () => {
  return <h1>Hello, React! using functional component🚀</h1>
}

const HeadingComponent2  = () => (
  <h1 className = "heading">Hello, React! using functional component🚀</h1>
)
// if we want to return multiple line or add attributes, we need to wrap in ()

const HeadingComponent3  = () => <h1>Hello, React! using functional component🚀</h1>
// short hand syntax of arrow function

// another example
const Title = () => {
  return (
    <h1 id="title" key="title">Namaste React</h1>
  )
}

const HeaderComponent4 = function (){
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


const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);
root.render(jsxHeading)
// root.render(<HeaderComponent4/>)

console.log(heading)
console.log(jsxHeading)
// both are objects and same
