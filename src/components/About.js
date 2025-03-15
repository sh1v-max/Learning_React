import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <main className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to our restaurant, where we serve delicious meals made with 
          love and fresh ingredients. Our mission is to provide a unique dining 
          experience with great food and a cozy atmosphere.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
