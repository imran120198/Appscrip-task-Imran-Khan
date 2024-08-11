import Image from "next/image";
import React from "react";
import styles from "../../styles/Header/Header.module.css";
import topnavbargrid from "../../assets/topnavbargrid.svg";
import logo from "../../assets/logo.svg";
import search from "../../assets/search.svg";
import heart from "../../assets/heart.svg";
import cart from "../../assets/cart.svg";
import user from "../../assets/user.svg";
import { ChevronDown, Menu } from "lucide-react";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.topNavbar}>
        <span>
          <Image src={topnavbargrid} alt="topnavbargrid" className="mr-4" />
          <p>Lorem ipsum dolor</p>
        </span>
        <span>
          <Image src={topnavbargrid} alt="topnavbargrid" className="mr-4" />
          <p>Lorem ipsum dolor</p>
        </span>
        <span>
          <Image src={topnavbargrid} alt="topnavbargrid" className="mr-4" />
          <p>Lorem ipsum dolor</p>
        </span>
      </div>

      <div className={styles.middleNavbar}>
        <div>
          <Menu className={styles.menu} />
          <Image src={logo} alt="logo" />
        </div>
        <div>
          <p className={styles.logo}>LOGO</p>
        </div>
        <div className={styles.icons}>
          <span>
            <Image src={search} alt="search icon" />
          </span>
          <span>
            <Image src={heart} alt="heart icon" />
          </span>
          <span>
            <Image src={cart} alt="cart icon" />
          </span>
          <span>
            <Image src={user} alt="user icon" />
          </span>
          <span className={styles.language}>
            <p>ENG</p>
            <ChevronDown />
          </span>
        </div>
      </div>

      {/* Bootom Navbar */}
      <div className={styles.bottomNavbar}>
        <div>SHOP</div>
        <div>SKILLS</div>
        <div>STORIES</div>
        <div>ABOUT</div>
        <div>CONTACT US</div>
      </div>
    </div>
  );
};

export default Header;
