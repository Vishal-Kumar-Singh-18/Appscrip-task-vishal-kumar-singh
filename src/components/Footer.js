import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div className={styles.subscribe}>
          <h2>Be The First To Know</h2>
          <p>Sign up for updates from mettā muse.</p>
          <div className={styles.emailContainer}>
            <input type="email" placeholder="Enter your e-mail..." className={styles.emailInput} />
            <button className={styles.subscribeButton}>SUBSCRIBE</button>
          </div>
        </div>
        <div className={styles.contact}>
          <h2>CONTACT US</h2>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h2>CURRENCY</h2>
          <div className={styles.currency}>
            <span className={styles.flag}>🌐</span> + USD
          </div>
          <p className={styles.currencyNote}>
            Transactions will be completed in Euros and a currency reference is available on hover.
          </p>
        </div>
      </div>
      <div className={styles.footerMiddle}>
        <div className={styles.brand}>
          <h4>mettā muse</h4>
          <a href="#about">About Us</a>
          <a href="#stories">Stories</a>
          <a href="#artisans">Artisans</a>
          <a href="#boutiques">Boutiques</a>
          <a href="#contact">Contact Us</a>
          <a href="#compliance">EU Compliance Docs</a>
        </div>
        <div className={styles.links}>
          <h4>Quick Links</h4>
          <a href="#orders">Orders & Shipping</a>
          <a href="#join">Join/Login as a Seller</a>
          <a href="#payment">Payment & Pricing</a>
          <a href="#returns">Return & Refunds</a>
          <a href="#faqs">FAQs</a>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
        <div className={styles.socialPayment}>
          <div className={styles.social}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <span className={styles.icon}><i className="bi bi-instagram"></i></span>
              <span className={styles.icon}><i className="bi bi-linkedin"></i></span>
            </div>
          </div>
          <div className={styles.payment}>
            <h4>mettā muse Accepts</h4>
            <div className={styles.paymentIcons}>
              <span className={styles.icon}>💳</span>
              <span className={styles.icon}>💳</span>
              <span className={styles.icon}>💳</span>
              <span className={styles.icon}>💳</span>
              <span className={styles.icon}>💳</span>
              <span className={styles.icon}>💳</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.copyright}>© 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;