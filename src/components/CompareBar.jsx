import React from 'react';
import styles from './CompareBar.module.css';

const CloseIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CompareBar = ({ compareList, onRemove, onCompare, onClear }) => {
  if (compareList.length === 0) return null;

  return (
    <div className={styles.bar}>
      <div className={styles.inner}>
        <div className={styles.parks}>
          {compareList.map((park) => (
            <div key={park.id} className={styles.item}>
              <img
                className={styles.thumb}
                src={park.images[0]?.url}
                alt=""
                aria-hidden="true"
              />
              <span className={styles.itemName}>{park.fullName}</span>
              <button
                className={styles.removeBtn}
                onClick={() => onRemove(park.id)}
                aria-label={`Remove ${park.fullName}`}
              >
                <CloseIcon />
              </button>
            </div>
          ))}

          {compareList.length < 3 && (
            <div className={styles.emptySlot}>
              <span>+</span>
              <span className={styles.emptyLabel}>Add park</span>
            </div>
          )}
        </div>

        <div className={styles.actions}>
          <button
            className={styles.compareBtn}
            onClick={onCompare}
            disabled={compareList.length < 2}
          >
            Compare {compareList.length > 0 && `(${compareList.length})`}
          </button>
          <button className={styles.clearBtn} onClick={onClear}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;
