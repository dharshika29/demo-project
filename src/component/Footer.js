import React from "react";
import styles from "../styles/Footer.module.css";
import { FaInstagram, FaPinterestP, FaFacebookF, FaTwitter, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* COLUMN 1 */}
      <div className={styles.col}>
        <p>
          Remember to offer beautiful flowers from Kyiv LuxeBouquets Valentines Day,
          Mothers Day, Christmas... Reminds you 7 days before. No spam or sharing
          your address
        </p>
        <div className={styles.emailBox}>
          <input type="email" placeholder="Your Email" />
          <button>REMIND</button>
        </div>
      </div>

      {/* COLUMN 2 */}
      <div className={styles.col}>
        <h4>Contact Us</h4>
        <p>
          <span className={styles.subhead}>Address</span><br />
          15/4 Khreshchatyk Street, Kyiv
        </p>
        <p>
          <span className={styles.subhead}>Phone</span><br />
          <a href="tel:+380980099777">+380980099777</a>
        </p>
        <p>
          <span className={styles.subhead}>General Enquiry:</span><br />
          <a href="mailto:Kiev.Florist.Studio@gmail.com">Kiev.Florist.Studio@gmail.com</a>
        </p>
        <h5>Follow Us</h5>
        <div className={styles.icons}>
          <FaInstagram />
          <FaPinterestP />
          <FaFacebookF />
          <FaTwitter />
          <FaPaperPlane />
        </div>
      </div>

      {/* COLUMN 3 */}
      <div className={styles.col}>
        <h4>Shop</h4>
        <ul>
          <li>All Products</li>
          <li>Fresh Flowers</li>
          <li>Dried Flowers</li>
          <li>Live Plants</li>
          <li>Designer Vases</li>
          <li>Aroma Candles</li>
          <li>Freshener Diffuser</li>
        </ul>
        <h4>Service</h4>
        <ul>
          <li>Flower Subscription</li>
          <li>Wedding & Event Decor</li>
        </ul>
      </div>

      {/* COLUMN 4 */}
      <div className={styles.col}>
        <h4>About Us</h4>
        <ul>
          <li>Our story</li>
          <li>Blog</li>
          <li>Shipping & returns</li>
          <li>Terms & conditions</li>
          <li>Privacy policy</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
