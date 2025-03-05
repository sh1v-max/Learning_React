import React from 'react'
import ReactDOM from 'react-dom/client'


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://static.vecteezy.com/system/resources/previews/050/585/647/non_2x/a-hamburger-and-a-drink-are-shown-in-a-line-free-vector.jpg"
          alt="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const Footer = () => {
  return <footer className="footer">© 2025 Your Restaurant Name. All rights reserved.</footer>;
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* <Body /> */}
      <Footer />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
