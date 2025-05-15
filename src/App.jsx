// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PaginaImovel from './pages/PaginaImovel';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imovel/:id" element={<PaginaImovel />} />
      </Routes>
    </Router>
  );
}

export default App;
