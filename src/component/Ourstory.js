import React from "react";
import styles from "../styles/Ourstory.module.css";
import imgFounder from "../image/image.png";
import img1 from "../image/Rectangle 74.png";
import img2 from "../image/Rectangle 75.png";
import img3 from "../image/Rectangle 76.png";
import Footer from "./Footer";
const OurStory = () => {
  return (
    <>
      <div className={styles.storyPage}>
        <section className={styles.heroSection}>
          <div className={styles.heroLeft}>
            <div className={styles.heroLeft1}>
              <h2>Our Story</h2>
              <p className={styles.p1}>About</p>
              <h3>Why Kyiv LuxeBouquets</h3>
              <p>
                Discover Uniquely Crafted Bouquets and Gifts for Any Occasion:
                Spread <br/>Joy with Our Online Flower Delivery Service
              </p>
              <div className={styles.iconRow}>
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-youtube"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-pinterest"></i>
              </div>
            </div>
          </div>

          <div className={styles.heroRight}>
            <img src={imgFounder} alt="Founder" />
          </div>
        </section>

        <div className={styles.sectionTitle}>
          <h3>Our Founder’s Passion</h3>
          <p>
            Kyiv LuxeBouquets was founded in 2010 by Natalia Zelinska with the
            goal of bringing unique and exquisite bouquets to the people of
            Kyiv. Natalia has always had a passion for flowers and design, and
            his vision was to create a local floral studio that would specialize
            in the creation and delivery of fresh, beautiful, and distinctive
            bouquets.
          </p>
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.gridItem}>
            <img src={img1} alt="Bouquets" />
          </div>

          <div className={styles.gridText}>
            <h4>Expertly Crafted Bouquets</h4>
            <p>
              At Kyiv LuxeBouquets, we take pride in our team of talented and
              experienced florists who carefully select each bloom, ensuring
              that only the freshest and most stunning flowers make it into our
              bouquets. We work directly with farms to source the highest
              quality flowers, and our skilled florists expertly craft each
              bouquet to perfection.
            </p>
          </div>

          <div className={styles.gridText}>
            <h4>Bouquets, Gifts & Ambiance</h4>
            <p>
              In addition to our stunning bouquets, we also offer a collection
              of dried bouquets, house plants, and fragrant candles from luxury
              brands to create the perfect ambiance. We believe that sending
              flowers, plants, and gifts should be easy and stress-free, which
              is why we offer same or next-day delivery throughout Kyiv.
            </p>
          </div>

          <div className={styles.gridItem}>
            <img src={img2} alt="Interior" />
          </div>

          <div className={styles.gridItem}>
            <img src={img3} alt="Gift Box" />
          </div>

          <div className={styles.gridText}>
            <h4>Making Every Day Special</h4>
            <p>
              Our mission is simple: to make every day special and memorable for
              our customers. We are dedicated to providing the highest quality
              flowers, exceptional customer service, and a seamless online
              experience that will make you feel confident and satisfied with
              your purchase.Thank you for choosing Kyiv LuxeBouquets. We look
              forward to bringing joy and happiness to your life with our
              beautiful bouquets and gifts.
            </p>
          </div>
        </div>

        <div className={styles.ctaSection}>
          <h3>Discover Our Beautiful Bouquets</h3>
          <p>
            Explore our collection of exquisite bouquets and surprise your loved
            ones with <br />
            the perfect gift. Click the button below to start shopping
          </p>
          <button className={styles.ctaBtn}>Shop Now</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurStory;
