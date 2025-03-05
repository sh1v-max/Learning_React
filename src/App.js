import React from 'react'
import ReactDOM from 'react-dom/client'

const Footer = () => {
  return <h4>Footer</h4>
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
