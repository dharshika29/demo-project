import React from "react";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.navSection}>
        <button className={styles.navItem}>Shop</button>
        <button className={styles.navItem}>Contact</button>
      </div>

      <div className={styles.navSection1}>
        <button className={styles.navItem}>Sign in</button>
        <button className={styles.navItem}>Cart</button>
      </div>
    </header>
  );
};

export default Navbar;
