import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { expandStates } from '../data/states';
import styles from './ParkOverlay.module.css';

const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ParkOverlay = ({ parkCode, isVisible, onClose }) => {
  const [park, setPark] = useState(null);

  useEffect(() => {
    if (!parkCode) return;
    setPark(null);
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?limit=1&parkCode=${parkCode}&api_key=${import.meta.env.VITE_NPS_API_KEY}`
      )
      .then((res) => setPark(res.data.data[0]))
      .catch(console.error);
  }, [parkCode]);

  return (
    <div
      className={`${styles.overlay} ${isVisible ? styles.visible : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={park?.fullName ?? 'Park details'}
    >
      {/* ── Back bar ────────────────────────────────────────── */}
      <div className={styles.backBar}>
        <button className={styles.backBtn} onClick={onClose}>
          <BackIcon />
          <span>All parks</span>
        </button>
      </div>

      {!park ? (
        /* ── Loading skeleton ─────────────────────────────── */
        <div className={styles.loading}>
          <div className={styles.heroSkeleton} />
          <div className={styles.bodySkeleton}>
            <div className={styles.skeletonLine} style={{ width: '60%', height: '2.5rem' }} />
            <div className={styles.skeletonLine} style={{ width: '100%' }} />
            <div className={styles.skeletonLine} style={{ width: '95%' }} />
            <div className={styles.skeletonLine} style={{ width: '80%' }} />
          </div>
        </div>
      ) : (
        <>
          {/* ── Hero image ──────────────────────────────────── */}
          <div className={styles.heroWrapper}>
            <img
              className={styles.heroImage}
              src={park.images[0]?.url}
              alt={park.images[0]?.title || park.fullName}
            />
            <div className={styles.heroGradient} />
            <div className={styles.heroText}>
              <p className={styles.designation}>{park.designation}</p>
              <h1 className={styles.title}>{park.fullName}</h1>
              {park.states && (
                <p className={styles.location}>
                  {expandStates(park.states)}
                </p>
              )}
            </div>
          </div>

          {/* ── Body ────────────────────────────────────────── */}
          <div className={styles.body}>
            <div className={styles.description}>
              <p>{park.description}</p>
            </div>

            <div className={styles.activities}>
              <h2 className={styles.sectionTitle}>Activities</h2>
              <ul className={styles.tags}>
                {park.activities.map((a) => (
                  <li key={a.id} className={styles.tag}>{a.name}</li>
                ))}
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ParkOverlay;
