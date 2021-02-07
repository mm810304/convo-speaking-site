import React from 'react';

import CategoryCard from './CategoryCard';
import styles from './categories.module.css';

const Categories = ({ categories }) => {
  return (
    <div className={styles.categoryContainer}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
      <p className={styles.extraResources}>If you need more advanced conversations or just want some more practice, <a href="https://www.convospeakingpro.com" target="_blank" rel="noreferrer" className={styles.proLink}>Convo Speaking Pro</a> has 300 free advanced English conversation lessons.</p>
    </div>
  );
};

export default Categories;