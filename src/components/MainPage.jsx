import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useMatch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import FilterBar from './FilterBar';
import ParkCard from './ParkCard';
import SkeletonCard from './SkeletonCard';
import ParkOverlay from './ParkOverlay';
import MapView from './MapView';
import CompareBar from './CompareBar';
import CompareView from './CompareView';
import styles from './MainPage.module.css';

const getDayOfYear = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  return Math.floor((now - start) / (1000 * 60 * 60 * 24));
};

const SKELETON_COUNT = 9;
const MAX_COMPARE = 3;

const MainPage = ({ parks, onStateSelect }) => {
  const navigate = useNavigate();
  const match = useMatch('/park/:parkCode');
  const parkCode = match?.params?.parkCode ?? null;

  const discoveryRef = useRef(null);

  // ── Filters ──────────────────────────────────────────────────
  const [searchQuery, setSearchQuery] = useState('');
  const [designationFilter, setDesignationFilter] = useState('National Park');
  const [activityFilter, setActivityFilter] = useState('');

  // ── View mode ─────────────────────────────────────────────────
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'map'

  // ── Park overlay ──────────────────────────────────────────────
  const [displayedParkCode, setDisplayedParkCode] = useState(null);
  const [overlayVisible, setOverlayVisible] = useState(false);

  useEffect(() => {
    if (parkCode) {
      setDisplayedParkCode(parkCode);
      requestAnimationFrame(() => requestAnimationFrame(() => setOverlayVisible(true)));
    } else {
      setOverlayVisible(false);
      const t = setTimeout(() => setDisplayedParkCode(null), 520);
      return () => clearTimeout(t);
    }
  }, [parkCode]);

  useEffect(() => {
    document.body.style.overflow = overlayVisible ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [overlayVisible]);

  // ── Compare ───────────────────────────────────────────────────
  const [compareList, setCompareList] = useState([]);
  const [compareViewOpen, setCompareViewOpen] = useState(false);
  const [compareViewVisible, setCompareViewVisible] = useState(false);

  const toggleCompare = useCallback((park) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === park.id);
      if (exists) return prev.filter((p) => p.id !== park.id);
      if (prev.length >= MAX_COMPARE) return prev;
      return [...prev, park];
    });
  }, []);

  const openCompareView = useCallback(() => {
    setCompareViewOpen(true);
    requestAnimationFrame(() => requestAnimationFrame(() => setCompareViewVisible(true)));
  }, []);

  const closeCompareView = useCallback(() => {
    setCompareViewVisible(false);
    setTimeout(() => setCompareViewOpen(false), 520);
  }, []);

  // ── Derived data ──────────────────────────────────────────────
  const designations = useMemo(() => {
    const set = new Set(parks.map((p) => p.designation).filter(Boolean));
    return [...set].sort();
  }, [parks]);

  const activities = useMemo(() => {
    const set = new Set();
    parks.forEach((p) => p.activities?.forEach((a) => set.add(a.name)));
    return [...set].sort();
  }, [parks]);

  const visibleParks = useMemo(() => {
    return parks.filter((p) => {
      if (designationFilter) {
        const matches = designationFilter === 'National Park'
          ? p.designation?.startsWith('National Park')
          : p.designation === designationFilter;
        if (!matches) return false;
      }
      if (activityFilter) {
        if (!p.activities?.some((a) => a.name === activityFilter)) return false;
      }
      if (!searchQuery) return true;
      const q = searchQuery.toLowerCase();
      return (
        p.fullName.toLowerCase().includes(q) ||
        p.states?.toLowerCase().includes(q)
      );
    });
  }, [parks, designationFilter, activityFilter, searchQuery]);

  const featuredPark = parks.length > 0 ? parks[getDayOfYear() % parks.length] : null;
  const heroImage = featuredPark?.images?.[0]?.url;
  const heroAlt = featuredPark?.images?.[0]?.title ?? 'National park landscape';

  const scrollToDiscovery = useCallback(() => {
    discoveryRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const compareIds = useMemo(() => new Set(compareList.map((p) => p.id)), [compareList]);

  const hasCompareBar = compareList.length > 0;

  return (
    <>
      <Header onDiscover={scrollToDiscovery} />

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrapper}>
          {heroImage && (
            <img key={heroImage} className={styles.heroBg} src={heroImage} alt={heroAlt} />
          )}
        </div>
        <div className={styles.heroGradient} />

        <div className={styles.heroContent}>
          {featuredPark ? (
            <>
              <p className={styles.heroEyebrow}>Today&rsquo;s Featured Park</p>
              <h1 className={styles.heroTitle}>{featuredPark.fullName}</h1>
              <p className={styles.heroDescription}>
                {featuredPark.description?.slice(0, 160)}…
              </p>
              <div className={styles.heroActions}>
                <button className={styles.heroCta} onClick={() => navigate(`/park/${featuredPark.parkCode}`)}>
                  Explore this park
                </button>
                <button className={styles.heroScroll} onClick={scrollToDiscovery}>
                  ↓ Discover all sites
                </button>
              </div>
            </>
          ) : (
            <>
              <p className={styles.heroEyebrow}>Explore the outdoors</p>
              <div className={styles.heroTitleSkeleton} />
              <div className={styles.heroDescSkeleton} />
            </>
          )}
        </div>
      </section>

      {/* ── Discovery ─────────────────────────────────────────── */}
      <section
        ref={discoveryRef}
        className={styles.discovery}
        style={hasCompareBar ? { paddingBottom: 'var(--compare-bar-height)' } : undefined}
      >
        <div className={styles.discoveryInner}>
          <div className={styles.discoveryHeader}>
            <h2 className={styles.discoveryTitle}>Discover</h2>
            <div className={styles.viewToggle}>
              <button
                className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.viewBtnActive : ''}`}
                onClick={() => setViewMode('grid')}
                aria-pressed={viewMode === 'grid'}
              >
                <GridIcon /> Grid
              </button>
              <button
                className={`${styles.viewBtn} ${viewMode === 'map' ? styles.viewBtnActive : ''}`}
                onClick={() => setViewMode('map')}
                aria-pressed={viewMode === 'map'}
              >
                <MapIcon /> Map
              </button>
            </div>
          </div>

          <FilterBar
            onStateSelect={onStateSelect}
            onTextSearch={setSearchQuery}
            onDesignationSelect={setDesignationFilter}
            onActivitySelect={setActivityFilter}
            designations={designations}
            activities={activities}
            parkCount={parks.length > 0 ? visibleParks.length : undefined}
          />

          {viewMode === 'map' ? (
            <MapView
              parks={visibleParks}
              onParkClick={(code) => navigate(`/park/${code}`)}
            />
          ) : (
            <>
              <ul className={styles.grid}>
                {parks.length === 0
                  ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                      <li key={i}><SkeletonCard /></li>
                    ))
                  : visibleParks.map((park) => (
                      <li key={park.id}>
                        <ParkCard
                          park={park}
                          onClick={() => navigate(`/park/${park.parkCode}`)}
                          isInCompare={compareIds.has(park.id)}
                          onCompareToggle={toggleCompare}
                          compareDisabled={compareList.length >= MAX_COMPARE}
                        />
                      </li>
                    ))}
              </ul>

              {parks.length > 0 && visibleParks.length === 0 && (
                <p className={styles.noResults}>No sites match your search.</p>
              )}
            </>
          )}
        </div>
      </section>

      <Footer />

      {/* ── Park overlay ──────────────────────────────────────── */}
      {displayedParkCode && (
        <ParkOverlay
          parkCode={displayedParkCode}
          isVisible={overlayVisible}
          onClose={() => navigate('/')}
        />
      )}

      {/* ── Compare bar ───────────────────────────────────────── */}
      <CompareBar
        compareList={compareList}
        onRemove={(id) => setCompareList((prev) => prev.filter((p) => p.id !== id))}
        onCompare={openCompareView}
        onClear={() => setCompareList([])}
      />

      {/* ── Compare view ──────────────────────────────────────── */}
      {compareViewOpen && (
        <CompareView
          parks={compareList}
          isVisible={compareViewVisible}
          onClose={closeCompareView}
        />
      )}
    </>
  );
};

// Inline icon components (no extra files)
const GridIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/>
    <rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
  </svg>
);

const MapIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/>
    <line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>
  </svg>
);

export default MainPage;
