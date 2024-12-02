import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/homepage.jsx';
import Dummy from './pages/dummy.jsx';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/dumb" element={<Dummy />} />
    </Routes>
  </Router>
);

export default App;