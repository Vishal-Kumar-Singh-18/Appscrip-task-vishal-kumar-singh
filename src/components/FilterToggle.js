'use client';

import styles from '../app/page.module.css';

const FilterToggle = ({ onToggle, isFilterVisible, itemCount }) => {
  return (
    <div className={styles.filterToggle}>
      <div className={styles.itemsAndToggle}>
        <span className={styles.itemCount}>{itemCount} Items</span>
        <span className={styles.toggleText} onClick={onToggle}>
          {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
        </span>
      </div>
      <div className={styles.recommended}>
        Recommended <span className={styles.caret}>▼</span>
      </div>
    </div>
  );
};

export default FilterToggle;