import React from "react";
import styles from "../styles/OurService.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../image/image.png";
import img2 from "../image/img8.jpg";
import Slider from "react-slick";


const OurService = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Our Service</h2>

      <section className={styles.section}>
        <div className={styles.left}>
          <img src={img1} alt="Flower Subscriptions" className={styles.image} />
        </div>
        <div className={styles.right}>
          <p className={styles.small}>SERVICE</p>
          <h3>Flower Subscriptions</h3>
          <p>
            Experience the convenience and savings of regular flower deliveries
            with our flexible subscription service — save up to 30% more per
            purchase.
          </p>
          <button className={styles.btn}>BUTTON</button>
        </div>
      </section>

      <section
        className={styles.sectionBg}
        style={{ backgroundImage: `url(${img2})` }}
      >
        <div className={styles.overlay}>
          <div className={styles.textBlock}>
            <p className={styles.small}>SERVICE</p>
            <h3>Wedding & Event Decor</h3>
            <p>
              Let our creative floral designs bring your celebrations to life.
              From weddings to corporate events, we’ll craft elegant decorations
              that leave a lasting impression.
            </p>
            <button className={styles.btnWhite}>BUTTON</button>
          </div>
        </div>
      </section>

<section className={styles.clients}>
  <h2>Our Clients say</h2>

  <Slider
    dots={true}
    infinite={true}
    speed={800}
    slidesToShow={1}
    slidesToScroll={1}
    autoplay={true}
    autoplaySpeed={3500}
    arrows={false}
    pauseOnHover={false}
  >
    <div className={styles.slide}>
      <blockquote>
        “Ordered flowers online and they were the best bouquet! Impressed
        everyone around. Highly recommend this flower shop!”
        <footer>– Maria Holstein</footer>
      </blockquote>
    </div>

    <div className={styles.slide}>
      <blockquote>
        “Their wedding decor was absolutely breathtaking! Every detail was
        perfect and elegant.”
        <footer>– Daniel Roberts</footer>
      </blockquote>
    </div>

    <div className={styles.slide}>
      <blockquote>
        “Beautiful flowers, on-time delivery, and amazing service.
        Definitely my go-to place now!”
        <footer>– Sophia Turner</footer>
      </blockquote>
    </div>
  </Slider>

  <button className={styles.btn}>BUTTON</button>
</section>

    </div>
  );
};

export default OurService;
