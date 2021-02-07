import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import styles from './category-card.module.css';

const CategoryCard = ({ category }) => {
  const { category_name, description, slug, image } = category;

  return (
    <article className={styles.cardContainer}>
      <Link to={`/${slug.current}`}>
        <div className={styles.imageContainer}>
          <Img 
            fluid={image.asset.fluid}
            alt={`Image for category ${category_name}`}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h4 className={styles.conversations}>{description}</h4>
          <h2 className={styles.categoryName}>{category_name}</h2>
        </div>
      </Link>
    </article>
  );
};

export default CategoryCard;