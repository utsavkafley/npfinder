import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import axios from 'axios';
import MainPage from './components/MainPage';

function App() {
  const [parks, setParks] = useState([]);
  const [stateCode, setStateCode] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?limit=500&stateCode=${stateCode}&api_key=${import.meta.env.VITE_NPS_API_KEY}`
      )
      .then((res) => {
        // Return all NPS units — designation filtering is done client-side
        setParks(res.data.data);
      })
      .catch(console.error);
  }, [stateCode]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage parks={parks} onStateSelect={setStateCode} />} />
        <Route path="/park/:parkCode" element={<MainPage parks={parks} onStateSelect={setStateCode} />} />
        <Route path="/parks" element={<Navigate to="/" replace />} />
        <Route path="/parkDetail/:parkCode" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
