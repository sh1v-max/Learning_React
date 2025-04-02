import { LOGO_URL } from '../utils/constants'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
// import headerImg from '../images/header.jpg'

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login')
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Toggle state for menu
  const onlineStatus = useOnlineStatus()

  // console.log(`image: - ${headerImg}`)

  useEffect(() => {}, [btnNameReact])

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
          {/* <img className="logo"  src= {headerImg} alt="" /> */}
        </Link>
      </div>

      {/* Hamburger Menu Icon */}
      <button className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button>

      {/* Navigation Items */}
      <div className={`nav-items ${isMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            {onlineStatus ? "🟢" : "🔴"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() =>
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login")
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );

  // with tailwindcss

  return (
    <div className="header flex justify-between items-center fixed top-0 left-0 w-full p-3 bg-gray-200 bg-opacity-95 shadow-md z-50">
      <div className="w-22">
        <Link to="/">
          <img
            className="w-16 h-16 rounded-full border border-gray-300 transition duration-300 hover:border-orange-500"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>
      {/* Hamburger Menu Icon (For Mobile) */}
      {/* <button className="md:hidden text-2xl cursor-pointer fixed right-4 top-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button> */}

      {/* Navigation Menu */}
      <div className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
        <ul className="flex gap-5 text-lg font-medium">
          <li>{onlineStatus ? '🟢' : '🔴'}</li>
          <li className="hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/">Cart</Link>
          </li>
          <button
            className="bg-orange-500 text-white font-bold p-1 px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600 active:scale-95"
            onClick={() =>
              setBtnNameReact(btnNameReact === 'Login' ? 'Logout' : 'Login')
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )

  return (
    <div className="flex justify-between items-center fixed top-0 left-0 w-full p-3 bg-gray-200 bg-opacity-95 shadow-md z-50">
      {/* Logo */}
      <div className="w-22">
        <Link to="/">
          <img
            className="w-16 h-16 rounded-full border border-gray-300 transition duration-300 hover:border-orange-500"
            src={LOGO_URL}
            alt="logo"
          />
        </Link>
      </div>

      {/* Hamburger Menu Icon (For Mobile) */}
      {/* <button className="md:hidden text-2xl cursor-pointer fixed right-4 top-6" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        ☰
      </button> */}

      {/* Navigation Menu */}
      <div
        className={`nav-items ${
          isMenuOpen ? 'open' : ''
        } md:flex items-center hidden`}
      >
        <ul className="flex gap-5 text-lg font-medium">
          <li>{onlineStatus ? '🟢' : '🔴'}</li>
          <li className="hover:text-orange-500">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-orange-500">
            <Link to="/">Cart</Link>
          </li>
          <button
            className="bg-orange-500 text-white font-bold px-4 py-2 rounded-md transition duration-300 hover:bg-orange-600 active:scale-95"
            onClick={() =>
              setBtnNameReact(btnNameReact === 'Login' ? 'Logout' : 'Login')
            }
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

// Export the component
export default Header
