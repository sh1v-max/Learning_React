import { LOGO_URL } from '../utils/constants'

const Header = () => {
  let btnName = 'Login'

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
              btnName = "Logout"
              console.log(btnName)
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  )
}

//? exporting the file
export default Header
