import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/index';
import Hakkinda from './pages/Hakkinda'; // Corrected import for Hakkında page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/hakkinda" element={<Hakkinda />} /> {/* Add Hakkında route */}
      </Routes>
    </Router>
  );
}

export default App;