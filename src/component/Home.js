
import React from "react";
import styles from "../styles/Home.module.css";
import img1 from "../image/img hero.png";
import img2 from "../image/z1.jpg";
import img3 from "../image/z2.png";
import img4 from "../image/z3.png";
import img5 from "../image/z4.png";
import img6 from "../image/z5.png";
import AboutPage from "./About";
import OurService from "./OurService";
import { useNavigate } from "react-router-dom";
import CustomSlider from "./Slider";

const HomePage = () => {
  const navigate = useNavigate();

  const items = [
    { type: "text", title: "Fresh Flowers" },
    { type: "image", img: img2 },
    { type: "image", img: img3 },
    { type: "text", title: "Fresh Flowers" },
    { type: "text", title: "Fresh Flowers" },
    { type: "image", img: img4 },
    { type: "image", img: img5 },
    { type: "text", title: "Aroma Candles" },
    { type: "text", title: "Aroma Candles" },
    { type: "image", img: img6 },
  ];

  return (
    <>
      <CustomSlider />

      <div className={styles.page}>
        <main className={styles.grid}>
          <section className={`${styles.leftBox} ${styles.fadeUp}`}>
            <h1>
              Kyiv <br />
              <span className={styles.bold}>LuxeBouquets®</span>
            </h1>
            <p className={styles.desc}>
              Discover Uniquely Crafted Bouquets and Gifts for Any Occasion.
              Spread Joy with Our Online Flower Delivery Service.
            </p>

            <div className={styles.subSection}>
              <img src={img1} alt="Flower" />
              <p>
                Experience the joy of giving with our handcrafted flowers,
                designed with care to bring beauty, balance, and gifts today.
              </p>
            </div>
          </section>

          <section className={styles.rightGrid}>
            {items.map((item, i) => (
              <div
                key={i}
                className={`${styles.item} ${styles.fadeUp} ${
                  item.type === "image" ? styles.imageBox : styles.textBox
                }`}
              >
                {item.type === "image" ? (
                  <img src={item.img} alt="Product" />
                ) : (
                  <>
                    <h3>{item.title}</h3>
                    <p
                      className={styles.shopNow}
                      onClick={() => navigate("/Category")}
                      style={{ cursor: "pointer" }}
                    >
                      Shop now
                    </p>
                  </>
                )}
              </div>
            ))}
          </section>
        </main>
      </div>

      <AboutPage />
      <OurService />
    </>
  );
};

export default HomePage;
