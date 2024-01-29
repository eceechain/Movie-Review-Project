// Footer.jsx
import React from 'react';
import '../styles/Footer.css'; // Import the external CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="column">
          <h3 className="section-title">Our Location</h3>
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.44035025458!2d-74.11842912523813!3d40.70582546212812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c250f1bf4b0e0d%3A0x83b0f1630cbfd8!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1643492578885!5m2!1sen!2suk"
            width="100%"
            height="200"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="separator"></div>
        <div className="column">
          <h3 className="section-title">Contact Us</h3>
          <ul>
            <li>Email: example@example.com</li>
            <li>Phone: 123-456-7890</li>
            <li>Address: 123 Street, City, Country</li>
          </ul>
        </div>
        <div className="separator"></div>
        <div className="column">
          <h3 className="section-title">Follow Us</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className="newsletter">
        <h3 className="section-title">Subscribe to our Newsletter</h3>
        <form action="#">
          <input type="email" placeholder="Enter your email" className="newsletter-input" />
          <button type="submit" className="newsletter-button">Subscribe</button>
        </form>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Your Website. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
