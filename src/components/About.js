import './About.css'

const About = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1>
          Welcome to Bite<span>Swift</span><br /> The world of <br /> <span className='tag'>Tasty & Fresh Food</span>
        </h1>
        <h4>
          "Better you will feel if you eat a Bite<span>Swift</span> healthy meal"
        </h4>
      </div>
      <div className="about-right">
        <img className='image'
          src="https://foodfire-chapter07.netlify.app/burger-image.ec55d069.png"
          alt="Food Image"
        />
      </div>
    </div>
  )
}

export default About
