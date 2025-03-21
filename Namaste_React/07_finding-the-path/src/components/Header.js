import { LOGO_URL } from '../utils/constants'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState('Login')

  // console.log("rendered")

  //? useEffect
  // if there's no dependency array, useEffect will run on every render
  // if dependency array is empty ("[]"), useEffect will run only once
  // if there is dependency array with some values ("[btnNameReact]"),
  // useEffect will run when those values change, in this case, every time btnNameReact changes
  useEffect(() => {
    // console.log("useEffect called")
  }, [btnNameReact]) // empty dependency array

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img className="logo" src={LOGO_URL} alt="logo" /></Link>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to = "/">Home</Link>
          </li>
          <li>
            <Link to = "/about">About</Link>
          </li>
          <li>
            <Link to = "/contact">Contact Us</Link></li>
          <li>
            <Link to = "">Cart</Link>
          </li>
          {/* we wont be using anchor tag to link to different pages */}
          {/* as it will refresh the page, slow down the performance and we will lose the state */}
          <button
            className="login-btn"
            onClick={() => {
              btnNameReact === 'Login'
                ? setBtnNameReact('Logout')
                : setBtnNameReact('Login')
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  )
}

//? exporting the file
export default Header
