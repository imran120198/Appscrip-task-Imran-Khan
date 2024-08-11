import React from "react";
import styles from "../../styles/Footer/Footer.module.css";
import BottomFooter from "./BottemFooter";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.topFooter}>
        <div>
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Signup for updates from Metta Muse</p>
          <p className={styles.inputContainer}>
            <input placeholder="Enter your email..." />
            <button>SUBSCRIBE</button>
          </p>
        </div>
        <div>
          <hr className={styles.divider1} />
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <hr className={styles.divider1} />
          <h2>CURRENCY</h2>
          <h4 className={styles.currncy}>
            <p>$</p>
            <p>USD</p>
          </h4>
          <hr className={styles.divider2} />
          <p className={styles.smallText}>
            Transactions will be completed in Euros and a currency reference is
            available on hover.
          </p>
        </div>
      </div>
      <BottomFooter />
    </div>
  );
};

export default Footer;
