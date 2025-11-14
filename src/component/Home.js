import React from "react";
import styles from "../styles/Home.module.css";
import img1 from "../image/img hero.png";
import img2 from "../image/a1.png";
import img3 from "../image/a2.png";
import img4 from "../image/a3.png";
import img5 from "../image/a4.png";
import img6 from "../image/a5.png";

const HomePage = () => {
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
    <div className={styles.page}>
      <main className={styles.grid}>
        <section className={styles.leftBox}>
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
              className={`${styles.item} ${
                item.type === "image" ? styles.imageBox : styles.textBox
              }`}
            >
              {item.type === "image" ? (
                <img src={item.img} alt="Product" />
              ) : (
                <>
                  <h3>{item.title}</h3>
                  <p>Shop now</p>
                </>
              )}
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
