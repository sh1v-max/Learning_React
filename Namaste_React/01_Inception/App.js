const heading = React.createElement('h1', { id: "heading" /* here we give attributes*/}, 'Hello world from React')

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)
