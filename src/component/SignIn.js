import React, { useState } from "react";
import { Modal, Button, Form, Alert } from "react-bootstrap";
import styles from "../styles/SignIn.module.css";
import apple from "../image/Apple.png";
import google from "../image/Google.png";

export default function SignIn({ show, handleClose }) {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const resetModal = () => {
    setStep(1);
    setPhone("");
    setError("");
    handleClose();
  };

  const handleContinue = () => {
    const num = phone.replace(/\D/g, "");
    if (num.length < 10) {
      setError("Please enter a valid mobile number");
      return;
    }
    setError("");
    setStep(2);
  };

  return (
    <Modal show={show} onHide={resetModal} centered className={styles.modalBox}>
      <Modal.Body className={styles.modalContent}>
        {step === 1 && (
          <>
            <h2 className={styles.title}>
              Greetings! Welcome to <br /> luxury gift shop.
            </h2>

            <p className={styles.subText}>Use your mobile number to sign up or log in</p>

            {error && (
              <Alert variant="danger" className={styles.errorMsg}>
                {error}
              </Alert>
            )}

            <Form>
              <Form.Control
                type="text"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={styles.input}
              />

              <Button className={styles.continueBtn} onClick={handleContinue}>
                CONTINUE
              </Button>

              <div className={styles.or}>or</div>

              <Button className={styles.googleBtn}>
                <img src={google} alt="Google" /> Continue with Google
              </Button>

              <Button className={styles.appleBtn}>
                <img src={apple} alt="Apple" /> Continue with Apple
              </Button>
            </Form>

            <div className={styles.footerLinks}>
              <a href="/privacy-policy">Privacy Policy</a> |{" "}
              <a href="/terms">Terms & Conditions</a>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className={styles.title}>Sign up</h2>

            <p className={styles.subText}>
              Become a member and enjoy personalized gift recommendations.
            </p>

            <p className={styles.numberDisplay}>✓ {phone}</p>

            <Form.Control
              type="text"
              placeholder="Enter code from SMS"
              className={styles.input}
            />

            <Button className={styles.continueBtn}>JOIN US</Button>

            <p className={styles.resendText}>
              Didn’t receive a code?
              <span className={styles.resendBtn}> Resend code</span>
            </p>

            <div className={styles.footerLinks}>
              <a href="/privacy-policy">Privacy Policy</a> |{" "}
              <a href="/terms">Terms and Conditions</a>
            </div>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
}
