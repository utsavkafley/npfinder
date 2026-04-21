import React, { useEffect } from 'react';
import { expandStates } from '../data/states';
import styles from './CompareView.module.css';

const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const formatFee = (park) => {
  const fees = park.entranceFees ?? [];
  if (fees.length === 0) return 'Free';
  const paid = fees.find((f) => parseFloat(f.cost) > 0);
  if (!paid) return 'Free';
  return `$${parseFloat(paid.cost).toFixed(0)} / vehicle`;
};

const ParkColumn = ({ park }) => (
  <div className={styles.column}>
    <div className={styles.colHero}>
      <img
        className={styles.colImage}
        src={park.images[0]?.url}
        alt={park.images[0]?.title || park.fullName}
      />
      <div className={styles.colHeroOverlay}>
        <p className={styles.colDesignation}>{park.designation}</p>
        <h2 className={styles.colName}>{park.fullName}</h2>
      </div>
    </div>

    <div className={styles.colBody}>
      <div className={styles.stat}>
        <span className={styles.statLabel}>Location</span>
        <span className={styles.statValue}>
          {expandStates(park.states, ', ') || '—'}
        </span>
      </div>

      <div className={styles.stat}>
        <span className={styles.statLabel}>Entry Fee</span>
        <span className={styles.statValue}>{formatFee(park)}</span>
      </div>

      <div className={styles.stat}>
        <span className={styles.statLabel}>About</span>
        <p className={styles.description}>
          {park.description?.slice(0, 220)}{park.description?.length > 220 ? '…' : ''}
        </p>
      </div>

      <div className={styles.stat}>
        <span className={styles.statLabel}>Activities</span>
        <ul className={styles.tags}>
          {park.activities?.slice(0, 8).map((a) => (
            <li key={a.id} className={styles.tag}>{a.name}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const CompareView = ({ parks, isVisible, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = isVisible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isVisible]);

  return (
    <div className={`${styles.overlay} ${isVisible ? styles.visible : ''}`} role="dialog" aria-modal="true">
      <div className={styles.backBar}>
        <button className={styles.backBtn} onClick={onClose}>
          <BackIcon />
          <span>Back</span>
        </button>
        <h1 className={styles.heading}>Compare</h1>
      </div>

      <div className={styles.grid}>
        {parks.map((park) => (
          <ParkColumn key={park.id} park={park} />
        ))}
      </div>
    </div>
  );
};

export default CompareView;
