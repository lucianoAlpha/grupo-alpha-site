import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Destaques from './components/Destaques'
import PaginaImovel from './pages/PaginaImovel'
import './styles/index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Destaques />} />
        <Route path="/imovel/:id" element={<PaginaImovel />} />
      </Routes>
    </Router>
  )
}

export default App
