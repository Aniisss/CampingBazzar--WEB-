import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and description */}
        <div className="footer-logo">
          <h2>Camping Bazaar</h2>
          <p>Explore the great outdoors with the best camping equipment.</p>
        </div>

        {/* Links section */}
        <div className="footer-links">
          <div className="footer-column">
            <h3>Shop</h3>
            <ul>
              <li>
                <a href="/tents">Tents</a>
              </li>
              <li>
                <a href="/backpacks">Backpacks</a>
              </li>
              <li>
                <a href="/sleeping-bags">Sleeping Bags</a>
              </li>
              <li>
                <a href="/gear">Camping Gear</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/careers">Careers</a>
              </li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/support">Customer Support</a>
              </li>
              <li>
                <a href="/returns">Returns & Exchanges</a>
              </li>
              <li>
                <a href="/shipping">Shipping Information</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social media and newsletter */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Camping Bazaar. All rights reserved.</p>
      </div>
    </footer>
  );
}
export default Footer;
