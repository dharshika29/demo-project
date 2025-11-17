import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Product.module.css";

import img2 from "../image/z1.jpg";
import img3 from "../image/z2.png";
import img4 from "../image/z3.png";
import img5 from "../image/z4.png";

import c1 from "../image/c1.png";
import c2 from "../image/c2.png";
import c3 from "../image/c3.png";
import c4 from "../image/c4.png";
import c5 from "../image/c5.png";
import x1 from "../image/x1.png";
import x2 from "../image/x2.png";
import x3 from "../image/x3.png";
import x4 from "../image/x4.png";



// ⭐ Sample product list
const products = [
  {
    id: 1,
    name: "Snowfall",
    price: 59,
    img: img2,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at voluptates voluptatum tempora quam nesciunt illo doloremque. Asperiores fuga ex adipisci, molestias suscipit labore laboriosam sapiente delectus. Ratione ut deserunt, culpa quasi aspernatur voluptatum nesciunt, esse veritatis reprehenderit obcaecati nulla, similique quod id officia placeat!",
  },
  {
    id: 2,
    name: "Dawn’s Delight",
    price: 79,
    img: img3,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at voluptates voluptatum tempora quam nesciunt illo doloremque. Asperiores fuga ex adipisci, molestias suscipit labore laboriosam sapiente delectus. Ratione ut deserunt, culpa quasi aspernatur voluptatum nesciunt, esse veritatis reprehenderit obcaecati nulla, similique quod id officia placeat!",
  },
  {
    id: 3,
    name: "Pink Elegance",
    price: 45,
    img: img4,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at voluptates voluptatum tempora quam nesciunt illo doloremque. Asperiores fuga ex adipisci, molestias suscipit labore laboriosam sapiente delectus. Ratione ut deserunt, culpa quasi aspernatur voluptatum nesciunt, esse veritatis reprehenderit obcaecati nulla, similique quod id officia placeat!,"
  },
  {
    id: 4,
    name: "Rustic Charm",
    price: 39,
    img: img5,
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime at voluptates voluptatum tempora quam nesciunt illo doloremque. Asperiores fuga ex adipisci, molestias suscipit labore laboriosam sapiente delectus. Ratione ut deserunt, culpa quasi aspernatur voluptatum nesciunt, esse veritatis reprehenderit obcaecati nulla, similique quod id officia placeat"
  },
];

// ⭐ Scroll functions
const scrollLeft = () => {
  document
    .getElementById("comboScroll")
    .scrollBy({ left: -200, behavior: "smooth" });
};

const scrollRight = () => {
  document
    .getElementById("comboScroll")
    .scrollBy({ left: 200, behavior: "smooth" });
};

export default function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) return <h1>Product Not Found</h1>;

  return (
    <>
      {/* MAIN PRODUCT SECTION */}
      <div className={styles.productWrapper}>
        {/* LEFT SIDE IMAGE */}
        <div className={styles.leftSide}>
          <img
            src={product.img}
            alt={product.name}
            className={styles.mainImage}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.rightSide}>
          <p className={styles.breadcrumb}>FRESH FLOWERS / {product.name}</p>

          <h1 className={styles.title}>
            {product.name} - ${product.price}
          </h1>

          <p className={styles.description}>{product.description}</p>

          {/* QUANTITY */}
          <div className={styles.qtySection}>
            <p>Quantity</p>
            <div className={styles.qtyBox}>
              <button onClick={() => qty > 1 && setQty(qty - 1)}>-</button>
              <span>{qty}</span>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </div>
          </div>

          {/* COMBO / CAROUSEL */}
          <div className={styles.comboSection}>
            <div className={styles.comboHeader}>
              <p>Excellent Combination with:</p>
              <span>Vase Not Included</span>
            </div>

            <div className={styles.comboSlider}>
              <button className={styles.arrow} onClick={scrollLeft}>
                ❮
              </button>

              <div className={styles.comboItems} id="comboScroll">
                {[
                  { img: c1, name: "Glass Vase", price: "$15" },
                  { img: c2, name: "Hammershoi", price: "$45" },
                  { img: c3, name: "Ceramic Vase", price: "$35" },
                  { img: c4, name: "Steel Vase", price: "$25" },
                  { img: c5, name: "Bamboo", price: "$36" },
                ].map((item, index) => (
                  <div className={styles.comboCard} key={index}>
                    <img src={item.img} alt="" />
                    <p>{item.name}</p>
                    <span>{item.price}</span>
                  </div>
                ))}
              </div>

              <button className={styles.arrow} onClick={scrollRight}>
                ❯
              </button>
            </div>
          </div>

          {/* PRICE OPTIONS */}
          <div className={styles.priceOptions}>
            <label className={styles.radioOption}>
              <input type="radio" name="price" defaultChecked />
              <span>One time purchase. Price ${product.price}</span>
            </label>

            <label className={styles.radioOption}>
              <input type="radio" name="price" />
              <span>Subscribe now, and save 25% on this order.</span>
            </label>
          </div>

          {/* ADD BUTTON */}
          <button className={styles.addBtn}>ADD TO BASKET</button>
        </div>
      </div>

      {/* ⭐ YOU MAY ALSO LIKE SECTION ⭐ */}
      <div className={styles.recommendSection}>
        <h2>You may also like...</h2>

        <div className={styles.recommendGrid}>
          <div className={styles.recommendCard}>
            <img src={x1} alt="Snowfall" />
            <p>Snowfall</p>
            <span>$59</span>
          </div>

          <div className={styles.recommendCard}>
            <img src={x2} alt="Dawn’s Delight" />
            <p>Dawn’s Delight</p>
            <span>$79</span>
          </div>

          <div className={styles.recommendCard}>
            <img src={x3} alt="Pink Elegance" />
            <p>Pink Elegance</p>
            <span>$45</span>
          </div>

          <div className={styles.recommendCard}>
            <img src={x4} alt="Rustic Charm" />
            <p>Rustic Charm</p>
            <span>$39</span>
          </div>
        </div>
      </div>
    </>
  );
}
<p></p>