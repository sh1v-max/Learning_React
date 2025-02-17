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
// JSX is HTML/XML like syntax extension for JavaScript
// JSX is not a part of react
// JSX is not a valid JavaScript
// js engine can't understand JSX
// but parcel <. babel run it properly
// babel transpile it to react

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
// functional component is a just a normal js function that returns a react element or JSX
// we should always start component name with capital letter

//? HeadingComponent is a functional component
// example 1
// we can use both arrow function and normal function
// we have to use return keyword in normal function
// arrow function is more preferable
// arrow function
const HeadingComponent = () => {
  return <h1>Hello, React! using functional component🚀</h1>
}
// normal function
const HeadingComponent02 = function () {
  return <h1>Hello, React! using functional component🚀</h1>
}

// example 2
const HeadingComponent2 = () => (
  <h1 className="heading">Hello, React! using functional component🚀</h1>
)
// if we want to return multiple line or add attributes, we need to wrap in ()

// example 3
const HeadingComponent3 = () => (
  <h1>Hello, React! using functional component🚀</h1>
)
// short hand syntax of arrow function

// example 4
const HeadingComponent4 = () => (
  <div id="container">
    <h1 className="heading">Hello, React! using functional component🚀</h1>
    <h2>There goes the second line</h2>
  </div>
)
// two or more sibling require a wrapping parent element, we can use <></> or <div></div>

// example 5/ using one component inside another
//? also known as component composition
const Title = () => (
  <h1 id="title" key="title">
    Namaste React from title
  </h1>
)

const HeadingComponent5 = function () {
  return (
    <div>
      <Title />
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
//& using {} allow embedding JavaScript expressions inside JSX

const elem = <span>React Element</span>
const name = 'John Doe'

// react element
const title = (
  <>
    <h1 id="h1" key="h1">This is JSX</h1>
    <h2>{elem}</h2>
    <h2>{name}</h2>
  </>
)
// title is just a normal js object/variable

//================================================================================================
//& playing more with react element, react component, and JSX
const ReactComponent = () => (
  <div>
    <h1>hello</h1>
    {/* <h2>{reactElement}</h2> */}
    <h2>{name}</h2>
    <h2>{100 + 200}</h2>
    <h2>{console.log('Hello Wazir')}</h2>
    {/* return Hello Wazir in consol */}
    {/* {title} */}
    {/* this will inject react element inside component  */}
    {/* {elem} */}
  </div>
)

const reactElement = (
  <div>
    {/* <h1>hello</h1> */}
    {/* <h2>{<ReactComponent />}</h2> */}
    {/* can not access before initialization */}
    {ReactComponent()}
    {/* we can call the function too */}
    {/* <h2>{name}</h2> */}
    {/* <h2>{100 + 200}</h2> */}
    <h2>{console.log('Hello Wazir')}</h2>
    {/* return Hello Wazir in consol */}
    {title}
    {/* this will inject react element inside component  */}
    {/* {elem} */}
  </div>
)
/* you can inject any js code inside curly braces */

//? we can't use if else in jsx

//================================================================================================
//* rendering react element
const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading);
// root.render(title)
root.render(reactElement);
// root.render(<ReactComponent/>);
// root.render(jsxHeading)

// we can not render react component like react element
// we need to wrap it in < />
// root.render(<HeadingComponent4/>)
// root.render(<HeadingComponent5/>)

// console.log(heading)
// console.log(jsxHeading)