import React from "react";
import styles from "../styles/OrderSuccess.module.css";
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img
          src="https://i.gifer.com/embedded/download/7efs.gif"
          alt="success"
          className={styles.gif}
        />
        <h1 className={styles.title}>Order Confirmed!</h1>
        <p className={styles.text}>Thank you for your purchase 🎉</p>

        <p className={styles.orderId}>
          Order ID: <span>#ORD{Math.floor(Math.random() * 90000) + 10000}</span>
        </p>

        <Link to="/">
          <button className={styles.button}>CONTINUE SHOPPING</button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
