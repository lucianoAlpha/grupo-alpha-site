import React from 'react'
import { imoveis } from '../data/imoveis'
import ImovelCard from './ImovelCard'

function Destaques() {
  return (
    <section className="destaques">
      <h2>Imóveis em Destaque</h2>
      <div className="cards-grid">
        {imoveis.map(imovel => (
          <ImovelCard key={imovel.id} imovel={imovel} />
        ))}
      </div>
    </section>
  )
}

export default Destaques
