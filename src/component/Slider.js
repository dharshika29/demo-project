import React, { useEffect } from "react";
import styles from "../styles/Slider.module.css";
import imgg1 from "../image/i1.png";
import imgg2 from "../image/i2.png";
import imgg3 from "../image/i3.png";
import imgg4 from "../image/i4.png";
import { useNavigate } from "react-router-dom";

const Slider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const backgrounds = document.querySelectorAll(`.${styles.background}`);
    const slider = document.querySelector(`.${styles.sliderImages}`);
    const images = Array.from(slider.children);

    let imageIndex = 0;

    function updateSlider() {
      images.forEach((image) => {
        image.classList.remove(
          styles.active,
          styles.previous,
          styles.next,
          styles.inactive
        );
      });

      images[imageIndex].classList.add(styles.active);

      if (imageIndex - 1 >= 0) {
        images[imageIndex - 1].classList.add(styles.previous);
      } else {
        images[images.length - 1].classList.add(styles.previous);
      }

      if (imageIndex + 1 < images.length) {
        images[imageIndex + 1].classList.add(styles.next);
      } else {
        images[0].classList.add(styles.next);
      }

      images.forEach((image, index) => {
        if (
          index !== imageIndex &&
          index !== (imageIndex - 1 + images.length) % images.length &&
          index !== (imageIndex + 1) % images.length
        ) {
          image.classList.add(styles.inactive);
        }
      });

      backgrounds.forEach((bg) => (bg.style.opacity = 0));
      backgrounds[imageIndex].style.opacity = 1;

      imageIndex = (imageIndex + 1) % images.length;
    }
    updateSlider();

    const interval = setInterval(updateSlider, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.sliderMain}>
      <div id="backgrounds">
        <div className={styles.background}></div>
        <div className={styles.background}></div>
        <div className={styles.background}></div>
        <div className={styles.background}></div>
      </div>

      <div className={styles.container}>
        <h1 className={styles.heading}>Kyiv LuxeBouquets®</h1>
        <p className={styles.text}>
          Discover Uniquely Crafted Bouquets and Gifts for Any Occasion. Spread
          Joy with Our Online Flower Delivery Service.
        </p>

        <div className={styles.socialIcons}>
          <img src={imgg1} alt="fb" onClick={() => navigate("/Category")} />
          <img src={imgg2} alt="ig" onClick={() => navigate("/Category")} />
          <img src={imgg3} alt="fb" onClick={() => navigate("/Category")} />
          <img src={imgg4} alt="ig" onClick={() => navigate("/Category")} />
        </div>
      </div>

      <div className={styles.sliderImages}>
        <img src={imgg1} alt="" />
        <img src={imgg2} alt="" />
        <img src={imgg3} alt="" />
        <img src={imgg4} alt="" />
      </div>
    </div>
  );
};

export default Slider;
