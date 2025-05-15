import React from 'react'
import bgImage from '../assets/bg.jpg'

function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero-overlay">
        <h1>VISÃO QUE CONSTRÓI LEGADO</h1>
        <p>Compra e venda de imóveis com inteligência e confiança.</p>
        <a href="#destaques" className="btn">Ver imóveis</a>
      </div>
    </section>
  )
}

export default Hero
