import React, { useEffect, useRef, useMemo } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useTheme } from '../hooks/useTheme';
import styles from './MapView.module.css';

const STADIA_KEY = import.meta.env.VITE_STADIA_API_KEY;

const styleUrl = (name) =>
  `https://tiles.stadiamaps.com/styles/${name}.json${STADIA_KEY ? `?api_key=${STADIA_KEY}` : ''}`;

const toGeoJSON = (parks) => ({
  type: 'FeatureCollection',
  features: parks
    .filter((p) => p.latitude && p.longitude)
    .map((p) => ({
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [parseFloat(p.longitude), parseFloat(p.latitude)],
      },
      properties: {
        parkCode: p.parkCode,
        name: p.fullName,
        designation: p.designation,
      },
    })),
});

const MapView = ({ parks, onParkClick }) => {
  const { theme } = useTheme();
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const parksRef = useRef(parks);

  // Keep parksRef current so the on('load') closure always sees fresh data
  useEffect(() => {
    parksRef.current = parks;
  }, [parks]);

  const mapStyle = useMemo(
    () => (theme === 'dark' ? styleUrl('alidade_smooth_dark') : styleUrl('outdoors')),
    [theme]
  );

  // Re-init map when style changes (theme toggle)
  useEffect(() => {
    if (!containerRef.current) return;

    const map = new maplibregl.Map({
      container: containerRef.current,
      style: mapStyle,
      center: [-98.5, 39.5],
      zoom: 3.4,
      attributionControl: { compact: true },
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'top-right');

    const popup = new maplibregl.Popup({
      closeButton: false,
      closeOnClick: false,
      offset: 10,
      className: styles.popup,
    });

    map.on('load', () => {
      map.addSource('parks', {
        type: 'geojson',
        data: toGeoJSON(parksRef.current),
        cluster: true,
        clusterMaxZoom: 9,
        clusterRadius: 48,
      });

      // Cluster bubbles
      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'parks',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step', ['get', 'point_count'],
            '#478978', 10,
            '#3a7266', 30,
            '#2e5c52',
          ],
          'circle-radius': ['step', ['get', 'point_count'], 18, 10, 24, 30, 30],
          'circle-opacity': 0.88,
        },
      });

      // Cluster count labels
      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'parks',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': ['get', 'point_count_abbreviated'],
          'text-size': 12,
        },
        paint: { 'text-color': '#fff' },
      });

      // Individual park dots
      map.addLayer({
        id: 'parks-point',
        type: 'circle',
        source: 'parks',
        filter: ['!', ['has', 'point_count']],
        paint: {
          'circle-radius': 7,
          'circle-color': '#c76a25',
          'circle-stroke-width': 2,
          'circle-stroke-color': '#fff',
          'circle-opacity': 0.92,
        },
      });

      // Click: open park overlay
      map.on('click', 'parks-point', (e) => {
        const { parkCode } = e.features[0].properties;
        onParkClick(parkCode);
      });

      // Click cluster: zoom in
      map.on('click', 'clusters', (e) => {
        const [feature] = map.queryRenderedFeatures(e.point, { layers: ['clusters'] });
        map.getSource('parks').getClusterExpansionZoom(
          feature.properties.cluster_id,
          (err, zoom) => {
            if (err) return;
            map.easeTo({ center: feature.geometry.coordinates, zoom });
          }
        );
      });

      // Hover popup
      map.on('mouseenter', 'parks-point', (e) => {
        map.getCanvas().style.cursor = 'pointer';
        popup
          .setLngLat(e.lngLat)
          .setHTML(`<span>${e.features[0].properties.name}</span>`)
          .addTo(map);
      });
      map.on('mouseleave', 'parks-point', () => {
        map.getCanvas().style.cursor = '';
        popup.remove();
      });
      map.on('mouseenter', 'clusters', () => { map.getCanvas().style.cursor = 'pointer'; });
      map.on('mouseleave', 'clusters', () => { map.getCanvas().style.cursor = ''; });
    });

    mapRef.current = map;
    return () => map.remove();
  }, [mapStyle]); // eslint-disable-line react-hooks/exhaustive-deps

  // Update source data when parks filter changes (without reinitialising the map)
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;
    const update = () => {
      const source = map.getSource('parks');
      if (source) source.setData(toGeoJSON(parks));
    };
    if (map.isStyleLoaded()) update();
    else map.once('load', update);
  }, [parks]);

  return <div ref={containerRef} className={styles.map} />;
};

export default MapView;
