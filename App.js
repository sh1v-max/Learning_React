import React from 'react'
import ReactDOM from 'react-dom/client'

// lets build our first project
// food order app using react

/**
 * Header
 * - Logo
 * - Nav items
 * - Cart
 * Body
 * - Search
 * - RestaurantContainer
 *    - RestaurantCard
 *      - Image
 *      - Name
 *      - Rating
 *      - Cuisine
 *      - Delivery Time
 * Footer
 * - CopyRight
 * - Links
 * - Address
 * - Contact
 */

// giving style inside js
// const styleCard = {
//   backgroundColor: '#f0f0f0',
// }

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/premium-vector/food-logo-design-with-leaf-creative-concept-premium-vector_526458-2675.jpg?semt=ais_hybrid"
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

const RestaurantCard = () => {
  return (
    // <div className='res-card' style ={styleCard}>
    <div className='res-card' style ={{ backgroundColor: "#f0f0f0"}}>
    {/* // <div className="res-card"> */}
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/rvxp5xbniat84r6efku2"
      />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian, Asian </h4>
      <h4>4.4 Star</h4>
      <h4>38 minute</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* // RestaurantCard */}
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

//* rendering react element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout />)
