"use client";

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FirstPage from './Components/FirstPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
