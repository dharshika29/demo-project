import React, { useState, useContext } from "react";
import styles from "../styles/Contact.module.css";
import { CartContext } from "./CartContext";
import { FiEdit2 } from "react-icons/fi";
import { FaCheck } from "react-icons/fa";
import google from "../image/Google.png";
import apple from "../image/Apple.png";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const { cartItems } = useContext(CartContext);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [shipping, setShipping] = useState({
    name: "",
    phone: "",
    street: "",
    apt: "",
    date: "",
    time: "",
  });

  const [errors, setErrors] = useState({});
  const [giftCode, setGiftCode] = useState("");

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // VALIDATE STEP 1
  const validateStep1 = () => {
    let err = {};

    if (!contact.name) err.name = "Enter your name";
    if (!contact.email) err.email = "Enter your email";
    if (!contact.phone) err.phone = "Enter your phone number";

    setErrors(err);

    if (Object.keys(err).length === 0) setStep(2);
  };

  // VALIDATE STEP 2
  const validateStep2 = () => {
    let err = {};

    if (!shipping.name) err.sname = "Enter recipient name";
    if (!shipping.phone) err.sphone = "Enter recipient phone";
    if (!shipping.street) err.street = "Enter street";
    if (!shipping.date) err.date = "Select date";
    if (!shipping.time) err.time = "Select time";

    setErrors(err);

    if (Object.keys(err).length === 0) setStep(3);
  };

  return (
    <div className={styles.wrapper}>
      {/* LEFT */}
      <div className={styles.left}>
        <div className={styles.breadcrumb}>
          <span className={step >= 1 ? styles.active : ""}>INFORMATION</span> 〉
          <span className={step >= 2 ? styles.active : ""}>SHIPPING</span> 〉
          <span className={step === 3 ? styles.active : ""}>PAYMENT</span>
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <p className={styles.title}>Contact information</p>

            {/* Name */}
            <div className={styles.inputBox}>
              <input
                className={`${styles.input} ${
                  errors.name ? styles.inputError : ""
                }`}
                placeholder="Your Name"
                value={contact.name}
                onChange={(e) => {
                  const v = e.target.value;
                  setContact({ ...contact, name: v });
                  setErrors((p) => ({
                    ...p,
                    name: v ? "" : "Enter your name",
                  }));
                }}
              />
              {errors.name && (
                <span className={styles.error}>{errors.name}</span>
              )}
            </div>

            {/* Email */}
            <div className={styles.inputBox}>
              <input
                className={`${styles.input} ${
                  errors.email ? styles.inputError : ""
                }`}
                placeholder="Your Email"
                value={contact.email}
                onChange={(e) => {
                  const v = e.target.value;
                  setContact({ ...contact, email: v });
                  setErrors((p) => ({
                    ...p,
                    email: v ? "" : "Enter your email",
                  }));
                }}
              />
              {errors.email && (
                <span className={styles.error}>{errors.email}</span>
              )}
            </div>

            {/* Phone */}
            <div className={styles.inputBox}>
              <input
                className={`${styles.input} ${
                  errors.phone ? styles.inputError : ""
                }`}
                placeholder="Your Phone number"
                value={contact.phone}
                onChange={(e) => {
                  const v = e.target.value;
                  setContact({ ...contact, phone: v });
                  setErrors((p) => ({
                    ...p,
                    phone: v ? "" : "Enter your phone number",
                  }));
                }}
              />
              {errors.phone && (
                <span className={styles.error}>{errors.phone}</span>
              )}
            </div>

            <button className={styles.button} onClick={validateStep1}>
              CONTINUE TO SHIPPING
            </button>
          </div>
        )}

        {/* STEP 1 DONE BOX */}
        {step > 1 && (
          <>
            <div className={styles.doneBox}>
              <p className={styles.titleDone}>
                <FaCheck /> Contact information
              </p>
              <FiEdit2 className={styles.edit} onClick={() => setStep(1)} />
            </div>
            <hr className={styles.line} />
          </>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <p className={styles.title}>Shipping details</p>

            {/* Recipient Name */}
            <div className={styles.inputBox}>
              <input
                className={`${styles.input} ${
                  errors.sname ? styles.inputError : ""
                }`}
                placeholder="Recipient Name"
                value={shipping.name}
                onChange={(e) => {
                  const v = e.target.value;
                  setShipping({ ...shipping, name: v });
                  setErrors((p) => ({
                    ...p,
                    sname: v ? "" : "Enter recipient name",
                  }));
                }}
              />
              {errors.sname && (
                <span className={styles.error}>{errors.sname}</span>
              )}
            </div>

            {/* Recipient Phone */}
            <div className={styles.inputBox}>
              <input
                className={`${styles.input} ${
                  errors.sphone ? styles.inputError : ""
                }`}
                placeholder="Recipient Phone"
                value={shipping.phone}
                onChange={(e) => {
                  const v = e.target.value;
                  setShipping({ ...shipping, phone: v });
                  setErrors((p) => ({
                    ...p,
                    sphone: v ? "" : "Enter recipient phone",
                  }));
                }}
              />
              {errors.sphone && (
                <span className={styles.error}>{errors.sphone}</span>
              )}
            </div>

            {/* Date */}
            <div className={styles.inputBox}>
              <input
                className={`${styles.input} ${
                  errors.date ? styles.inputError : ""
                }`}
                type="date"
                value={shipping.date}
                onChange={(e) => {
                  const v = e.target.value;
                  setShipping({ ...shipping, date: v });
                  setErrors((p) => ({ ...p, date: v ? "" : "Select date" }));
                }}
              />
              {errors.date && (
                <span className={styles.error}>{errors.date}</span>
              )}
            </div>

            {/* Time */}
            <div className={styles.inputBox}>
              <input
                className={`${styles.input} ${
                  errors.time ? styles.inputError : ""
                }`}
                type="time"
                value={shipping.time}
                onChange={(e) => {
                  const v = e.target.value;
                  setShipping({ ...shipping, time: v });
                  setErrors((p) => ({ ...p, time: v ? "" : "Select time" }));
                }}
              />
              {errors.time && (
                <span className={styles.error}>{errors.time}</span>
              )}
            </div>

            {/* Street + Apt */}
            <div className={styles.twoInputs}>
              <input
                className={`${errors.street ? styles.inputError : ""}`}
                placeholder="Street"
                value={shipping.street}
                onChange={(e) => {
                  const v = e.target.value;
                  setShipping({ ...shipping, street: v });
                  setErrors((p) => ({
                    ...p,
                    street: v ? "" : "Enter street",
                  }));
                }}
              />

              <input
                placeholder="Apartment"
                value={shipping.apt}
                onChange={(e) =>
                  setShipping({ ...shipping, apt: e.target.value })
                }
              />
            </div>
            {errors.street && (
              <span className={styles.error}>{errors.street}</span>
            )}

            <button className={styles.button} onClick={validateStep2}>
              CONTINUE TO PAYMENT
            </button>
          </div>
        )}

        {/* STEP 2 DONE */}
        {step === 3 && (
          <>
            <div className={styles.doneBox}>
              <p className={styles.titleDone}>
                <FaCheck /> Shipping details
              </p>
              <FiEdit2 className={styles.edit} onClick={() => setStep(2)} />
            </div>

            <hr className={styles.line} />
          </>
        )}

        {/* STEP 3 – PAYMENT */}
        {step === 3 && (
          <div className={styles.paymentSection}>
            <p className={styles.title}>3 Payment</p>

            <input className={styles.input} placeholder="Card Number" />

            <div className={styles.twoInputs}>
              <input placeholder="MM / YY" />
              <input placeholder="CVV" />
            </div>

            <button
              className={styles.purchaseButton}
              onClick={() => navigate("/order-success")}
            >
              MAKE A PURCHASE
            </button>

            <p className={styles.orText}>Or pay using:</p>

            <div className={styles.payOptions}>
              <button className={styles.applePay}>
                <img src={apple} alt="apple" /> APPLE PAY
              </button>

              <button className={styles.googlePay}>
                <img src={google} alt="google" /> GOOGLE PAY
              </button>
            </div>

            <hr className={styles.line} />
          </div>
        )}
      </div>

      {/* RIGHT SUMMARY */}
      <div className={styles.rightBox}>
        <p className={styles.summaryTitle}>ORDER SUMMARY</p>

        {cartItems.map((item) => (
          <div className={styles.productBox} key={item.id}>
            <img src={item.img} alt="product" />
            <div>
              <p className={styles.productName}>{item.name}</p>
              <p>Quantity ({item.qty})</p>
            </div>
            <p className={styles.price}>${item.price * item.qty}</p>
          </div>
        ))}

        <hr className={styles.line} />

        <p className={styles.giftText}>
          If you have our gift card, enter the code to get discounts
        </p>

        <div className={styles.giftContainer}>
          <input
            className={styles.giftInput}
            placeholder="Gift card"
            value={giftCode}
            onChange={(e) => setGiftCode(e.target.value)}
          />
          <button className={styles.giftButton}>APPLY</button>
        </div>

        <hr className={styles.line} />

        <div className={styles.rows}>
          <p>Subtotal</p>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <div className={styles.rows}>
          <p>Shipping</p>
          <span>Calculated at next step</span>
        </div>

        <div className={styles.totalRow}>
          <p>Total</p>
          <span>${subtotal.toFixed(2)}</span>
        </div>

        <p className={styles.secure}>Secure Checkout 🔒</p>
      </div>
    </div>
  );
};

export default Checkout;
