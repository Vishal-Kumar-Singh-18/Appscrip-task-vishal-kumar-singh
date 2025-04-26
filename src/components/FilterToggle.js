'use client';

import { useState } from 'react';
import styles from '../app/page.module.css';

const FilterToggle = ({ onToggle, isFilterVisible, itemCount }) => {
  const [isRecommendedOpen, setIsRecommendedOpen] = useState(false); 
  const [selectedOption, setSelectedOption] = useState('RECOMMENDED'); 

  const toggleRecommended = () => {
    setIsRecommendedOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsRecommendedOpen(false); // Close dropdown after selection
  };

  const recommendedOptions = [
    'RECOMMENDED',
    'NEWEST FIRST',
    'POPULAR',
    'PRICE: HIGH TO LOW',
    'PRICE: LOW TO HIGH',
  ];

  return (
    <div className={styles.filterToggle}>
      <div className={styles.itemsAndToggle}>
        <span className={styles.itemCount}>{itemCount} Items</span>
        <span className={styles.toggleText} onClick={onToggle}>
          {isFilterVisible ? 'HIDE FILTER' : 'SHOW FILTER'}
        </span>
      </div>
      <div className={styles.recommended}>
        {selectedOption} <span className={styles.caret} onClick={toggleRecommended}>▼</span>
        {isRecommendedOpen && (
          <div className={styles.recommendedDropdownContent}>
            {recommendedOptions.map((option) => (
              <div
                key={option}
                className={styles.dropdownOption}
                onClick={() => handleOptionSelect(option)}
                style={selectedOption === option ? { fontWeight: 'bold' } : {}}
              >
                {selectedOption === option && <span className={styles.checkmark}>✔</span>}
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterToggle;