'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className={styles.navbar}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.hamburgerLogoWrapper}>
          <span className={styles.hamburger} onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </span>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Logo" />
          </div>
        </div>
        <div className={styles.logoText}>LOGO</div>
        <div className={styles.navIcons}>
          <span className={styles.icon}><i className="bi bi-search"></i></span>
          <span className={styles.icon}><i className="bi bi-heart"></i></span>
          <span className={styles.icon}><i className="bi bi-bag"></i></span>
          <span className={`${styles.icon} ${styles.profileIcon}`}><i className="bi bi-person"></i></span>
          <span className={styles.language}>
            ENG <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
        <ul>
          <li><a href="#shop">SHOP</a></li>
          <li><a href="#skills">SKILLS</a></li>
          <li><a href="#stories">STORIES</a></li>
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#contact">CONTACT US</a></li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;