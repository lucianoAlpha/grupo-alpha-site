import React from 'react'
import { useParams } from 'react-router-dom'
import { imoveis } from '../data/imoveis'

function PaginaImovel() {
  const { id } = useParams()
  const imovel = imoveis.find(i => i.id === parseInt(id))

  if (!imovel) return <p>Imóvel não encontrado.</p>

  return (
    <div className="pagina-imovel">
      <img src={imovel.imagem} alt={imovel.nome} />
      <h1>{imovel.nome}</h1>
      <p><strong>Localização:</strong> {imovel.localizacao}</p>
      <p><strong>Preço:</strong> R$ {imovel.preco.toLocaleString()}</p>
      <p><strong>Descrição:</strong> {imovel.descricao}</p>
      <a href="https://wa.me/5599999999999" target="_blank" className="btn">Fale conosco</a>
    </div>
  )
}

export default PaginaImovel
