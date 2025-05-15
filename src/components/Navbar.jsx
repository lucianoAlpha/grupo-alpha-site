import React from 'react'
import logo from '../assets/certa.png'

function Navbar() {
  return (
    <header className="bg-zinc-950 border-b border-zinc-800 shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Grupo Alpha" className="h-10 w-auto" />
          <span className="text-lg font-semibold text-white">GRUPO ALPHA</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-zinc-300 hover:text-white transition">Início</a>
          <a href="#imoveis" className="text-zinc-300 hover:text-white transition">Imóveis</a>
          <a href="#sobre" className="text-zinc-300 hover:text-white transition">Sobre</a>
          <a href="#contato" className="text-zinc-300 hover:text-white transition">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
