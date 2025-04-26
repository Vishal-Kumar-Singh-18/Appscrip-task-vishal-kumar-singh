'use client';

import { useState, useEffect } from 'react';
import FilterToggle from './FilterToggle';
import styles from '../app/page.module.css';

const ProductSection = ({ products }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  // Set isFilterVisible based on screen size
  useEffect(() => {
    const handleResize = () => {
      setIsFilterVisible(window.innerWidth > 768);
    };

    // Set initial state
    handleResize();

    // Add event listener for resize
    window.addEventListener('resize', handleResize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleFilter = () => {
    setIsFilterVisible((prev) => !prev);
  };

  // Log the products prop to debug
  useEffect(() => {
    console.log('Products received in ProductSection:', products);
  }, [products]);

  if (!products) {
    return <p>Loading products...</p>;
  }

  const itemCount = products.length;

  return (
    <div>
      <FilterToggle onToggle={toggleFilter} isFilterVisible={isFilterVisible} itemCount={itemCount} />
      <div className={styles.gridContainer}>
        <aside className={`${styles.filters} ${isFilterVisible ? styles.filtersVisible : styles.filtersHidden}`}>
          <div className={styles.filterCategory}>
            <label>
              <input type="checkbox" />
              Customizable
            </label>
          </div>
          <div className={styles.filterCategory}>
            <label>Ideal For</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
          <div className={styles.filterCategory}>
            <label>Occasion</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
          <div className={styles.filterCategory}>
            <label>Work</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
          <div className={styles.filterCategory}>
            <label>Fabric</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
          <div className={styles.filterCategory}>
            <label>Segment</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
          <div className={styles.filterCategory}>
            <label>Suitable For</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
          <div className={styles.filterCategory}>
            <label>Raw Materials</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
          <div className={styles.filterCategory}>
            <label>Pattern</label>
            <div className={styles.dropdown}>
              <span>All</span>
              <span className={styles.caret}>▼</span>
            </div>
          </div>
        </aside>
        
        <section className={styles.productGrid}>
          {products.length === 0 ? (
            <p>No products available.</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className={styles.productItem}>
                <img
                  src={product.image}
                  alt={`${product.title} product image`}
                  className={styles.productImage}
                  loading="lazy"
                />
                <div className={styles.productInfo}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productDescription}>
                    Sign in or Create an account to see pricing
                  </p>
                  <div className={styles.priceAndFavorite}>
                    <p className={styles.price}>${product.price.toFixed(2)}</p>
                    <span className={styles.favorite}>
                      <i className="bi bi-heart"></i>
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </div>
  );
};

export default ProductSection;