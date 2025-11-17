import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navSection}>
        <Link to="/" className={styles.navItem}>Shop</Link>
        <Link to="/contact" className={styles.navItem}>Contact</Link>
      </div>

      <div className={styles.navSection1}>
        <Link to="/signin" className={styles.navItem}>Sign in</Link>
        <Link to="/cart" className={styles.navItem}>Cart</Link>
      </div>
    </header>
  );
};

export default Navbar;
