'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinksRef = useRef(null);
  const navbarRef = useRef(null); // Ref for the entire navbar container

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (isMenuOpen && navbarRef.current && !navbarRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Handle resize to close menu when exiting mobile view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close the menu when exiting mobile view
      }
    };

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={navbarRef} className={styles.navbarContainer}>
      {/* Top Black Section */}
      <div className={styles.topAnnouncement}>
        <div>Lorem ipsum dolor</div>
        <div>Lorem ipsum color</div>
        <div>Lorem ipsum dolor</div>
      </div>
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
        <div ref={navLinksRef} className={`${styles.navLinks} ${isMenuOpen ? styles.navLinksOpen : ''}`}>
          <ul>
            <li><a href="#shop">SHOP</a></li>
            <li><a href="#skills">SKILLS</a></li>
            <li><a href="#stories">STORIES</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Navbar;