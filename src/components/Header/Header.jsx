"use client";

import React, { useState } from "react";
import Image from "next/image";
import topnavbargrid from "../../assets/topnavbargrid.svg";
import Logo from "../../assets/logo.svg";
import styles from "../../styles/Header/Header.module.css";
import { Backpack, Heart, Menu, Search, User } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.topNavbar}>
        <div className={styles.topNavbarContent}>
          <Image src={topnavbargrid} alt="topnavbargrid" />
          <h1>Lorem ipsum dolor</h1>
        </div>
        <div className={styles.topNavbarHide}>
          <Image src={topnavbargrid} alt="topnavbargrid" />
          <h1>Lorem ipsum dolor</h1>
        </div>
        <div className={styles.topNavbarHide}>
          <Image src={topnavbargrid} alt="topnavbargrid" />
          <h1>Lorem ipsum dolor</h1>
        </div>
      </div>

      <nav className={styles.logoSection}>
        <div className={styles.logoContainer}>
          <div className={styles.logo}>
            <Menu className={styles.menu} onClick={toggleMenu} />
            <Image src={Logo} alt="Logo" />
          </div>

          <div className={styles.middleLogo}>
            <h1>LOGO</h1>
          </div>

          <div className={styles.iconSection}>
            <Search className={styles.icons} />
            <Heart className={styles.icons} />
            <Backpack className={styles.icons} />
            <User className={styles.hiddenicons} />
            <div className={styles.hiddenicons}>
              <h1>ENG</h1>
            </div>
          </div>
        </div>
      </nav>

      <div style={{ marginTop: "2.5rem", marginBottom: "1rem" }}>
        {/* Menu for desktop view */}
        <div className={styles.desktop}>
          <h1 className={styles.categoryDesktop}>HOME</h1>
          <h1 className={styles.categoryDesktop}>SHOP</h1>
          <h1 className={styles.categoryDesktop}>SKILLS</h1>
          <h1 className={styles.categoryDesktop}>STORIES</h1>
          <h1 className={styles.categoryDesktop}>ABOUT</h1>
          <h1 className={styles.categoryDesktop}>CONTACT US</h1>
        </div>

        {/* Menu for mobile view */}
        <div className={`${styles.mobile} ${menuOpen ? styles.block : styles.hidden}`}>
          <h1 className={styles.categoryMobile}>HOME</h1>
          <h1 className={styles.categoryMobile}>SHOP</h1>
          <h1 className={styles.categoryMobile}>SKILLS</h1>
          <h1 className={styles.categoryMobile}>STORIES</h1>
          <h1 className={styles.categoryMobile}>ABOUT</h1>
          <h1 className={styles.categoryMobile}>CONTACT US</h1>
        </div>
      </div>

      <div className={styles.lowerFilter}>
        <h1 className={styles.home}>HOME |</h1>
        <h1 className={styles.shop}>SHOP</h1>
      </div>
    </div>
  );
}
