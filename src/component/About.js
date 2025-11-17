import React from "react";
import styles from "../styles/About.module.css";
import footerImg from "../image/z10.png";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <div className={styles.left}>
          <h2>About us</h2>
        </div>
        <div className={styles.right1}>
          <p>OUR STORY</p>
          <h1>Kyiv LuxeBouquets</h1>
          <p>
            Kyiv LuxeBouquets crafts stylish, modern bouquets for design and
            aesthetics lovers. We source only the freshest flowers and arrange
            them with care and creativity. Every bouquet is handmade by our
            experienced florists in our Kyiv workshop.Kyiv LuxeBouquets crafts
            stylish, modern bouquets for design and aesthetics lovers. We source
            only the freshest flowers and arrange them with care and creativity.
            Every bouquet is handmade by our experienced florists in our Kyiv
            workshop.
          </p>
          <Link to="/about" className={styles.btn}>
            ABOUT
          </Link>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h2>Why choose us ?</h2>
        </div>
        <div className={styles.rightList}>
          {[1, 2, 3, 4].map((i) => (
            <div className={styles.card} key={i}>
              <h1>Stylish bouquets by florists</h1>
              <p>
                Florists of our studio are professionals with extensive
                experience. They regularly improve their qualifications and
                attend master classes.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.left}>
          <h2>To Contact Us</h2>
          <p>We will call you back</p>
          <div className={styles.form}>
            <input type="text" placeholder="Phone" />
            <button className={styles.btn}>BUTTON</button>
          </div>
          <div className={styles.footerGrid}>
            <div className={styles.box}>
              <h4>Phone</h4>
              <p>+380 98 170 00 80</p>
              <p>+380 98 180 00 90</p>
            </div>
            <div className={styles.box}>
              <h4>Address</h4>
              <p>Kyiv, Ukraine</p>
              <p>OPENING HOURS: 8 TO 11 P.M.</p>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <img
            src={footerImg}
            alt="Kyiv LuxeBouquets"
            className={styles.footerImg}
          />
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
