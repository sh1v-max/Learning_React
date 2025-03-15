import { useEffect, useState } from 'react'
import { LOGO_URL } from '../utils/constants'

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
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
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
