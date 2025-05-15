import React from 'react'
import { Link } from 'react-router-dom'

function ImovelCard({ imovel }) {
  return (
    <div className="card">
      <img src={imovel.imagem} alt={imovel.nome} />
      <div className="card-content">
        <h3>{imovel.nome}</h3>
        <p>{imovel.localizacao}</p>
        <p className="preco">R$ {imovel.preco.toLocaleString()}</p>
        <p className="descricao">{imovel.descricao}</p>
        <Link to={`/imovel/${imovel.id}`} className="btn">Ver mais</Link>
      </div>
    </div>
  )
}

export default ImovelCard
