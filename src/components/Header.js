import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Toggle state for menu

  useEffect(() => {}, [btnNameReact]);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" src={LOGO_URL} alt="logo" />
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
            <Link to="/">Home</Link>
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
};

// Export the component
export default Header;
