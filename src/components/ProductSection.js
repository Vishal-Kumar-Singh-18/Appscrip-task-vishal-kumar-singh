'use client';

import { useState, useEffect, useRef } from 'react';
import FilterToggle from './FilterToggle';
import styles from '../app/page.module.css';

const ProductSection = ({ products }) => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isFavorite, setIsFavorite] = useState({});
  const dropdownRefs = useRef({});

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

  // Toggle dropdown visibility
  const toggleDropdown = (category) => {
    setOpenDropdown(openDropdown === category ? null : category);
  };

  const toggleFavorite = (productId) => {
    setIsFavorite((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
  };

  const handleClickOutside = (event) => {
    if (openDropdown) {
      const currentDropdownRef = dropdownRefs.current[openDropdown];
      if (currentDropdownRef && !currentDropdownRef.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  if (!products) {
    return <p>Loading products...</p>;
  }

  const itemCount = products.length;

  // Sample filter options for each category (excluding Customizable)
  const filterOptions = {
    'IDEAL FOR': ['Men', 'Women', 'Baby & Kids'],
    OCCASION: ['Casual', 'Formal', 'Party'],
    WORK: ['Office', 'Outdoor', 'Remote'],
    FABRIC: ['Cotton', 'Silk', 'Wool'],
    SEGMENT: ['Premium', 'Budget', 'Mid-Range'],
    'SUITABLE FOR': ['Daily Wear', 'Special Occasions'],
    'RAW MATERIALS': ['Organic', 'Synthetic'],
    PATTERN: ['Solid', 'Striped', 'Floral'],
  };

  return (
    <div>
      <FilterToggle onToggle={toggleFilter} isFilterVisible={isFilterVisible} itemCount={itemCount} />
      <div className={styles.gridContainer}>
        <aside className={`${styles.filters} ${isFilterVisible ? styles.filtersVisible : styles.filtersHidden}`}>
          {/* Customizable as standalone checkbox */}
          <div className={styles.filterCategory}>
            <label>
              <input type="checkbox" />
              CUSTOMIZABLE
            </label>
          </div>

          {/* Other categories as dropdowns with checkboxes */}
          {Object.entries(filterOptions).map(([category, options]) => (
            <div key={category} className={styles.filterCategory}>
              <div className={styles.filterGroup}>
                <div
                  className={styles.dropdown}
                  onClick={() => toggleDropdown(category)}
                  style={{ cursor: 'pointer' }}
                >
                  <span className={styles.categoryName}>{category}</span>
                  <span className={styles.caret}>{openDropdown === category ? '▲' : '▼'}</span>
                </div>
                <div className={styles.selectionText}>All</div>
              </div>
              {openDropdown === category && (
                <div ref={(el) => (dropdownRefs.current[category] = el)} className={styles.dropdownContent}>
                  {options.map((option) => (
                    <label key={option} className={styles.checkboxLabel}>
                      <input type="checkbox" />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
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
                  <div className={styles.priceAndFavorite}>
                    <p className={styles.productDescription}>
                      Sign in or Create an account to see pricing
                    </p>
                    <span
                      className={`${styles.favorite} ${isFavorite[product.id] ? styles.favoriteSelected : ''}`}
                      onClick={() => toggleFavorite(product.id)}
                    >
                      <i className={isFavorite[product.id] ? 'bi bi-heart-fill' : 'bi bi-heart'}></i>
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