// import './About.css';
import { ABOUT_IMG } from '../utils/constants'
import User from './User'
import UserClass from './UserClass'
import AboutClass from './AboutClass'
import '../css/About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-detail">
        <h1>
          Welcome to Bite<span>Swift</span>
          <br /> The world of <br />
          <span className="tag">Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Bite<span>Swift</span> healthy
          meal"
        </h4>
        <p>
          At BiteSwift, we bring you the best food from top restaurants,
          ensuring quick delivery and fresh flavors. Whether you're craving a
          spicy biryani, a cheesy pizza, or a healthy salad, we've got it all!
        </p>
        <h2>Why Choose Us?</h2>
        <ul>
          <li>🚀 Fast and Reliable Delivery</li>
          <li>🍽️ A Wide Range of Restaurants</li>
          <li>💰 Affordable Prices & Exciting Offers</li>
          <li>🔒 Secure Payments</li>
          <li>🌍 Serving Across Multiple Cities</li>
        </ul>
        <p>
          Experience the best of dining at home with BiteSwift. Order now and
          enjoy a hassle-free food journey!
        </p>
        <h3>Contact Us</h3>
        <p>Email: support@biteswift.com</p>
        <p>Phone: +91 9369996021 / 7068900427</p>
      </div>
      <div className="about-img">
        <img className="image" src={ABOUT_IMG} alt="Food Image" />
      </div>
    </div>
    // <div>
    //? uncomment this section if you're working with AboutClass component
    //   <AboutClass />
    // </div>
  )
}

export default About
