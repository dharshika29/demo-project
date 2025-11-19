import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import SignIn from "./SignIn";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  // Modal state
  const [showSignIn, setShowSignIn] = useState(false);

  const isActive = (path) => location.pathname === path;

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
          {/* SIGN IN MODAL OPEN BUTTON */}
          <button
            onClick={() => setShowSignIn(true)}
            className={styles.navItem}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Sign in
          </button>

          <Link to="/cart" className={styles.cartBtn}>Cart</Link>
        </div>
      </header>

      {/* MODAL COMPONENT */}
      <SignIn show={showSignIn} handleClose={() => setShowSignIn(false)} />
    </>
  );
};

export default Navbar;
