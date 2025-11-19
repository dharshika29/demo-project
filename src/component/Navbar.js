import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <Link to="/" className={styles.logo}>..SHOP..</Link>

      <nav className={styles.links}>
        <Link
          to="/"
          className={`${styles.navItem} ${isActive("/") ? styles.active : ""}`}
        >
          Home
        </Link>

        <Link
          to="/contact"
          className={`${styles.navItem} ${isActive("/contact") ? styles.active : ""}`}
        >
          Contact
        </Link>

        <Link
          to="/about"
          className={`${styles.navItem} ${isActive("/about") ? styles.active : ""}`}
        >
          About
        </Link>
      </nav>

      <div className={styles.right}>
        <Link
          to="/signin"
          className={`${styles.navItem} ${isActive("/signin") ? styles.active : ""}`}
        >
          Sign in
        </Link>

        <Link to="/cart" className={styles.cartBtn}>Cart</Link>
      </div>
    </header>
  );
};

export default Navbar;
