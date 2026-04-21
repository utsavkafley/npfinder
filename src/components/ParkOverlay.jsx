import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { expandStates } from '../data/states';
import styles from './ParkOverlay.module.css';

const BackIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const MAX_IMAGES = 10;
const SLIDE_INTERVAL = 8000;

const ParkOverlay = ({ parkCode, isVisible, onClose }) => {
  const [park, setPark] = useState(null);
  const [activeImg, setActiveImg] = useState(0);

  // Slice images once park is loaded
  const images = park ? park.images.slice(0, MAX_IMAGES) : [];

  // Reset slide index when navigating to a new park
  useEffect(() => {
    setActiveImg(0);
  }, [parkCode]);

  // Preload all images as soon as park data arrives
  useEffect(() => {
    if (!park) return;
    park.images.slice(0, MAX_IMAGES).forEach((img) => {
      const el = new Image();
      el.src = img.url;
    });
  }, [park]);

  // Auto-advance slideshow
  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveImg((i) => (i + 1) % images.length);
    }, SLIDE_INTERVAL);
    return () => clearInterval(timer);
  }, [images.length]);

  // Fetch park detail
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
          {/* ── Hero ────────────────────────────────────────── */}
          <div className={styles.heroWrapper}>
            {/* All images rendered at once — browser preloads them all.
                Crossfade is pure CSS opacity transition, no remounting. */}
            {images.map((img, i) => (
              <img
                key={img.url}
                className={`${styles.heroImage} ${i === activeImg ? styles.heroImageActive : ''}`}
                src={img.url}
                alt={i === activeImg ? (img.altText || img.title || park.fullName) : ''}
                aria-hidden={i !== activeImg ? 'true' : undefined}
              />
            ))}

            <div className={styles.heroGradient} />

            <div className={styles.heroText}>
              <p className={styles.designation}>{park.designation}</p>
              <h1 className={styles.title}>{park.fullName}</h1>
              {park.states && (
                <p className={styles.location}>{expandStates(park.states)}</p>
              )}
            </div>

            {images.length > 1 && (
              <div className={styles.heroDots}>
                {images.map((_, i) => (
                  <button
                    key={i}
                    className={`${styles.heroDot} ${i === activeImg ? styles.heroDotActive : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Photo ${i + 1}`}
                    aria-pressed={i === activeImg}
                  />
                ))}
              </div>
            )}
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
