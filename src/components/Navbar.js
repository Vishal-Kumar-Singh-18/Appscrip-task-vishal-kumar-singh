import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      {/* Top Section */}
      <div className={styles.topSection}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Logo" />
        </div>
        <div className={styles.logoText}>LOGO</div>
        <div className={styles.navIcons}>
          <span className={styles.icon}><i className="bi bi-search"></i></span>
          <span className={styles.icon}><i className="bi bi-heart"></i></span>
          <span className={styles.icon}><i className="bi bi-bag"></i></span>
          <span className={styles.icon}><i className="bi bi-person"></i></span>
          <span className={styles.language}>
            ENG <i className="bi bi-chevron-down"></i>
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className={styles.navLinks}>
        <ul>
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
