import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PropertyList from './components/PropertyList'
import AlphaIA from './components/AlphaIA'

function App() {
  return (
    <div className="bg-zinc-900 text-white min-h-screen">
      <Navbar />
      <Hero />
      <PropertyList />
      <AlphaIA />
    </div>
  )
}

export default App
