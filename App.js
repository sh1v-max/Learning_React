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
 * Footer
 * - CopyRight
 * - Links
 * - Address
 * - Contact
 */


const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className='logo' src="https://img.freepik.com/premium-vector/food-logo-design-with-leaf-creative-concept-premium-vector_526458-2675.jpg?semt=ais_hybrid" alt='logo' />
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

const AppLayout = () => {
  return (
    <div className = "app">
      <Header />
    </div>
  )
}


//* rendering react element
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<AppLayout/>);
