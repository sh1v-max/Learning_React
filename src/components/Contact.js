import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className='contact-us'>Contact Us</h1>
      <p className='description'>We’d love to hear from you! Whether you have a question, feedback, or need support, feel free to reach out.</p>

      <div className="contact-info">
        <div className="contact-card">
          <h2>📍 Address</h2>
          <p>123, Food Street, BiteSwift City, India - 560001</p>
        </div>

        <div className="contact-card">
          <h2>📞 Phone</h2>
          <p>+91 93699 96021</p>
        </div>

        <div className="contact-card">
          <h2>📧 Email</h2>
          <p>support@biteswift.com</p>
        </div>
      </div>

      <h2>Send Us a Message</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
