import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header' // will work fine without .js extension
import Body from './components/Body'

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
