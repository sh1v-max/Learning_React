const heading = React.createElement('h1', { id: "heading" /* here we give attributes*/}, 'Hello world from React')

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
console.log(heading) // it will return an object
// this was the simple syntax to create only 1 element

//? how to create nested element
/**
 *<div class="parent">
 *  <div class="child">
 *    <h1>i'm h1 tag</h1>
 *  </div>
 *</div>
*/

const parent = React.createElement(
  "div",
  {id: "parent"},
  React.createElement(
    "div",
    {id: "child"},
    React.createElement("h1", {}, "i'm an h1 tag")
  )
)