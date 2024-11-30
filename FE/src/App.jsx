import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import React from 'react';
import Login from './Pages/LoginPage.jsx'
import ConfirmationPage from './Pages/ConfirmationPage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;