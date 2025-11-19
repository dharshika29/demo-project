import React from "react";
import img2 from "../image/z1.jpg";
import img3 from "../image/z2.png";
import img4 from "../image/z3.png";
import img5 from "../image/z4.png";
import img6 from "../image/z14.png";
import img7 from "../image/z18.png";
import img8 from "../image/z15.png";
import img9 from "../image/z12.png";
import { Link } from "react-router-dom";
import styles from "../styles/Category.module.css";
import hero from "../image/z7.png";

const products = [
  {
    id: 1,
    name: "Snowfall",
    price: 59,
    img: img2,
    description: "A delicate bouquet of white flowers perfect for gifting.",
  },
  {
    id: 2,
    name: "Dawn’s Delight",
    price: 79,
    img: img3,
    description:
      "Soft pastel flowers arranged beautifully for special moments.",
  },
  {
    id: 3,
    name: "Pink Elegance",
    price: 45,
    img: img4,
    description: "A charming mix of pink roses and seasonal blooms.",
  },
  {
    id: 4,
    name: "Rustic Charm",
    price: 39,
    img: img5,
    description: "Warm rustic bouquet with natural seasonal flowers.",
  },
  {
    id: 5,
    name: "Rustic Charm",
    price: 39,
    img: img6,
    description: "Warm rustic bouquet with natural seasonal flowers.",
  },
  {
    id: 6,
    name: "Rustic Charm",
    price: 39,
    img: img7,
    description: "Warm rustic bouquet with natural seasonal flowers.",
  },
  {
    id: 7,
    name: "Rustic Charm",
    price: 38,
    img: img8,
    description: "Warm rustic bouquet with natural seasonal flowers.",
  },
  {
    id: 8,
    name: "Rustic Charm",
    price: 39,
    img: img9,
    description: "Warm rustic bouquet with natural seasonal flowers.",
  },
];

const Category = () => {
  return (
    <div className={styles.categoryWrapper}>
      <div className={styles.leftBanner}>
        <img src={hero} className={styles.leftImage} alt="" />
        <h2 className={styles.bannerText}>Fresh Flowers</h2>
      </div>

      <div className={styles.productGrid}>
        {products.map((p) => (
          <Link key={p.id} to={`/product/${p.id}`} className={styles.card}>
            <img src={p.img} className={styles.cardImg} alt={p.name} />
            <h4>{p.name}</h4>
            <p>${p.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
