import React, { useState } from 'react';
import styles from './FilterBar.module.css';

const states = [
  { name: 'Alabama', abbreviation: 'AL' },
  { name: 'Alaska', abbreviation: 'AK' },
  { name: 'American Samoa', abbreviation: 'AS' },
  { name: 'Arizona', abbreviation: 'AZ' },
  { name: 'Arkansas', abbreviation: 'AR' },
  { name: 'California', abbreviation: 'CA' },
  { name: 'Colorado', abbreviation: 'CO' },
  { name: 'Connecticut', abbreviation: 'CT' },
  { name: 'Delaware', abbreviation: 'DE' },
  { name: 'District Of Columbia', abbreviation: 'DC' },
  { name: 'Federated States Of Micronesia', abbreviation: 'FM' },
  { name: 'Florida', abbreviation: 'FL' },
  { name: 'Georgia', abbreviation: 'GA' },
  { name: 'Guam', abbreviation: 'GU' },
  { name: 'Hawaii', abbreviation: 'HI' },
  { name: 'Idaho', abbreviation: 'ID' },
  { name: 'Illinois', abbreviation: 'IL' },
  { name: 'Indiana', abbreviation: 'IN' },
  { name: 'Iowa', abbreviation: 'IA' },
  { name: 'Kansas', abbreviation: 'KS' },
  { name: 'Kentucky', abbreviation: 'KY' },
  { name: 'Louisiana', abbreviation: 'LA' },
  { name: 'Maine', abbreviation: 'ME' },
  { name: 'Marshall Islands', abbreviation: 'MH' },
  { name: 'Maryland', abbreviation: 'MD' },
  { name: 'Massachusetts', abbreviation: 'MA' },
  { name: 'Michigan', abbreviation: 'MI' },
  { name: 'Minnesota', abbreviation: 'MN' },
  { name: 'Mississippi', abbreviation: 'MS' },
  { name: 'Missouri', abbreviation: 'MO' },
  { name: 'Montana', abbreviation: 'MT' },
  { name: 'Nebraska', abbreviation: 'NE' },
  { name: 'Nevada', abbreviation: 'NV' },
  { name: 'New Hampshire', abbreviation: 'NH' },
  { name: 'New Jersey', abbreviation: 'NJ' },
  { name: 'New Mexico', abbreviation: 'NM' },
  { name: 'New York', abbreviation: 'NY' },
  { name: 'North Carolina', abbreviation: 'NC' },
  { name: 'North Dakota', abbreviation: 'ND' },
  { name: 'Northern Mariana Islands', abbreviation: 'MP' },
  { name: 'Ohio', abbreviation: 'OH' },
  { name: 'Oklahoma', abbreviation: 'OK' },
  { name: 'Oregon', abbreviation: 'OR' },
  { name: 'Palau', abbreviation: 'PW' },
  { name: 'Pennsylvania', abbreviation: 'PA' },
  { name: 'Puerto Rico', abbreviation: 'PR' },
  { name: 'Rhode Island', abbreviation: 'RI' },
  { name: 'South Carolina', abbreviation: 'SC' },
  { name: 'South Dakota', abbreviation: 'SD' },
  { name: 'Tennessee', abbreviation: 'TN' },
  { name: 'Texas', abbreviation: 'TX' },
  { name: 'Utah', abbreviation: 'UT' },
  { name: 'Vermont', abbreviation: 'VT' },
  { name: 'Virgin Islands', abbreviation: 'VI' },
  { name: 'Virginia', abbreviation: 'VA' },
  { name: 'Washington', abbreviation: 'WA' },
  { name: 'West Virginia', abbreviation: 'WV' },
  { name: 'Wisconsin', abbreviation: 'WI' },
  { name: 'Wyoming', abbreviation: 'WY' },
];

// The 10 most meaningful NPS designation types — shown in priority order.
// Filtered against live data so only types that exist in the current result set appear.
const CURATED_DESIGNATIONS = [
  'National Park',
  'National Monument',
  'National Historic Site',
  'National Historic Park',
  'National Recreation Area',
  'National Seashore',
  'National Battlefield',
  'National Parkway',
  'National Lakeshore',
  'National Memorial',
];

const FilterBar = ({ onStateSelect, onTextSearch, onDesignationSelect, designations = [], parkCount }) => {
  const curatedOptions = CURATED_DESIGNATIONS.filter((d) => designations.includes(d));
  const [selectedState, setSelectedState] = useState('');
  const [query, setQuery] = useState('');
  const [selectedDesignation, setSelectedDesignation] = useState('National Park');

  const handleStateChange = (e) => {
    const val = e.target.value;
    setSelectedState(val);
    onStateSelect(val);
  };

  const handleQueryChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onTextSearch(val);
  };

  const handleDesignationChange = (e) => {
    const val = e.target.value;
    setSelectedDesignation(val);
    onDesignationSelect(val);
  };

  const handleClear = () => {
    setSelectedState('');
    setQuery('');
    setSelectedDesignation('National Park');
    onStateSelect('');
    onTextSearch('');
    onDesignationSelect('National Park');
  };

  const isFiltered = selectedState || query || selectedDesignation !== 'National Park';

  return (
    <div className={styles.bar}>
      <div className={styles.controls}>
        <div className={styles.inputWrapper}>
          <svg className={styles.searchIcon} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search parks…"
            value={query}
            onChange={handleQueryChange}
            aria-label="Search parks by name"
          />
        </div>

        <select
          className={styles.select}
          value={selectedDesignation}
          onChange={handleDesignationChange}
          aria-label="Filter by designation"
        >
          <option value="">All types</option>
          {curatedOptions.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>

        <select
          className={styles.select}
          value={selectedState}
          onChange={handleStateChange}
          aria-label="Filter by state"
        >
          <option value="">All States</option>
          {states.map((s) => (
            <option key={s.abbreviation} value={s.abbreviation}>
              {s.name}
            </option>
          ))}
        </select>

        {isFiltered && (
          <button className={styles.clearBtn} onClick={handleClear}>
            Clear
          </button>
        )}
      </div>

      {parkCount !== undefined && (
        <p className={styles.count}>
          {parkCount} {parkCount === 1 ? 'site' : 'sites'}
        </p>
      )}
    </div>
  );
};

export default FilterBar;
