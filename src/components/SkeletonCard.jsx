import React from 'react';
import styles from './SkeletonCard.module.css';

const SkeletonCard = () => (
  <div className={styles.card} aria-hidden="true">
    <div className={styles.shimmer} />
  </div>
);

export default SkeletonCard;
