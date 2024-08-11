"use client";
import {
  Linkedin,
  ChevronDown,
  ChevronUp,
  Image,
  Instagram,
} from "lucide-react";
import React, { useState } from "react";
import styles from "../../styles/Footer/BottomFooter.module.css";
import { paymentLogos } from "../../../public/svgs";
const BottomFooter = () => {
  const [isCompanyInfoOpen, setIsCompanyInfoOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isFollowUsOpen, setIsFollowUsOpen] = useState(false);

  const companyInfo = [
    "About Us",
    "Stories",
    "Artisans",
    "Boutiques",
    "Contact Us",
    "EU Compliance Docs",
    "Join as a Seller",
  ];

  const quickLinks = [
    "Orders & Shipping",
    "Join/Login as a Seller",
    "Payment & Pricing",
    "Return & Refunds",
    "FAQs",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const followUs = [
    { name: "Instagram", icon: <Instagram /> },
    { name: "LinkedIn", icon: <Linkedin /> },
  ];

  const toggleCompanyInfo = () => {
    setIsCompanyInfoOpen(!isCompanyInfoOpen);
  };

  const toggleQuickLinks = () => {
    setIsQuickLinksOpen(!isQuickLinksOpen);
  };

  const toggleFollowUs = () => {
    setIsFollowUsOpen(!isFollowUsOpen);
  };

  return (
    <footer>
      <div className={styles.bottomFooter}>
        <div className={styles.column}>
          <div
            className={`${styles.dropdown} ${
              isCompanyInfoOpen ? styles.open : ""
            }`}
          >
            <button
              className={styles.dropdownButton}
              onClick={toggleCompanyInfo}
            >
              Company Info
              {isCompanyInfoOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            <ul
              className={`${styles.dropdownList} ${
                isCompanyInfoOpen ? styles.show : ""
              }`}
            >
              {companyInfo.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <hr className={styles.divider} />
        </div>
        <div className={styles.column}>
          <div
            className={`${styles.dropdown} ${
              isQuickLinksOpen ? styles.open : ""
            }`}
          >
            <button
              className={styles.dropdownButton}
              onClick={toggleQuickLinks}
            >
              Quick Links
              {isQuickLinksOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            <ul
              className={`${styles.dropdownList} ${
                isQuickLinksOpen ? styles.show : ""
              }`}
            >
              {quickLinks.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          <hr className={styles.divider} />
        </div>

        <div className={styles.column}>
          <div
            className={`${styles.dropdown} ${
              isFollowUsOpen ? styles.open : ""
            }`}
          >
            <button className={styles.dropdownButton} onClick={toggleFollowUs}>
              Follow Us
              {isFollowUsOpen ? <ChevronUp /> : <ChevronDown />}
            </button>
            <ul
              className={`${styles.dropdownList} ${
                isFollowUsOpen ? styles.show : ""
              }`}
            >
              <div className="flex flex-row">
                {followUs.map((item, index) => (
                  <li key={index} className={styles.socialIcon}>{item.icon}</li>
                ))}
              </div>
            </ul>
          </div>
          <hr className={styles.divider} />

          <p>mettā muse Accepts</p>
          <div className={styles.svgs}>
            {paymentLogos.map((logo, index) => (
              <div key={index} className={styles.svg}>
                {logo.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
      <p className={styles.copyright}>
        Copyright © 2023 mettamuse. All rights reserved.
      </p>
    </footer>
  );
};

export default BottomFooter;
