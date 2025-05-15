import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Destaques from './components/Destaques'
import Sobre from './components/Sobre'
import Footer from './components/Footer'
import './styles/index.css'

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destaques />
      <Sobre />
      <Footer />
    </>
  )
}

export default App
