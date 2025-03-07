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

const RestaurantCard = ({resName, cuisine}) => {
  
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/11/14/33bfb682-d5fa-4054-9e2c-31911e34ebf6_65797.jpg"
        alt="res-logo"
      />
      <div className="res-details">
        <h3 className="res-name">{resName}</h3>
        <div className="res-info">
          <span className="res-rating">⭐ 4.0</span>
          <span className="res-distance">• 3.8 km</span>
          <span className="res-price">• ₹250 for two</span>
        </div>
        <h4 className="res-cuisine">
          {cuisine}
        </h4>
        <h4 className="res-location">Varanasi</h4>
      </div>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Meghana Foods"
          cuisine="Biryani, North Indian, Asian"
        />
        <RestaurantCard resName="KFC" cuisine="Fast Food, Beverages" />
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <footer className="footer">
      © 2025 Your Restaurant Name. All rights reserved.
    </footer>
  )
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
