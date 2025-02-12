
//* Parcel Feature
  // Created A Server
  // HMR - Hot Module Replacement
  // File Watcher algorithm - C++ (Execute File when changes occur)
  // BUNDLING
  // MINIFY
  // Cleaning our Code (Example - Remove Console.log)
  // Dev and Production Build
  // Super Fast build algorithm
  // Image Optimization
  // Caching while development
  // Compression
  // Compatible with older version of browser
  // HTTPS on dev [Example - npx parcel index.html --https]
  // Port Number [Example - If port number using in localhost then it will change in port number in another project running on localhost]
  // Consistent Hashing Algorithm
  // Zero Config
  // Tree shaking
  // Transitive Dependencies
 

//* importing react and react-dom from nodemodule folder
import React from "react";
import ReactDOM from "react-dom/client";

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
)


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent3)