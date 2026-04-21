import React from 'react';
import styles from './ParkCard.module.css';

const PlusIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ParkCard = ({ park, onClick, isInCompare, onCompareToggle, compareDisabled }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') onClick();
  };

  const handleCompareClick = (e) => {
    e.stopPropagation();
    onCompareToggle(park);
  };

  return (
    <article
      className={styles.card}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={park.fullName}
    >
      <div className={styles.imageWrapper}>
        <img
          className={styles.image}
          src={park.images[0]?.url}
          alt={park.images[0]?.title || park.fullName}
          loading="lazy"
        />
      </div>

      <div className={styles.overlay}>
        <p className={styles.designation}>{park.designation}</p>
        <h3 className={styles.name}>{park.fullName}</h3>
      </div>

      {onCompareToggle && (
        <button
          className={`${styles.compareBtn} ${isInCompare ? styles.compareBtnActive : ''}`}
          onClick={handleCompareClick}
          disabled={compareDisabled && !isInCompare}
          aria-label={isInCompare ? `Remove ${park.fullName} from compare` : `Add ${park.fullName} to compare`}
          title={compareDisabled && !isInCompare ? 'Max 3 parks' : isInCompare ? 'Remove from compare' : 'Compare'}
        >
          {isInCompare ? <CheckIcon /> : <PlusIcon />}
        </button>
      )}
    </article>
  );
};

export default ParkCard;
