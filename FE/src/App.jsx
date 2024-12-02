import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './pages/HomePage.jsx';
import Page2 from './pages/OtherPage.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App