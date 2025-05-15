// src/pages/PaginaImovel.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { imoveis } from '../data/imoveis';
import styles from './PaginaImovel.module.css';

function PaginaImovel() {
  const { id } = useParams();
  const imovel = imoveis.find((item) => item.id === parseInt(id));

  if (!imovel) {
    return <p>Imóvel não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <img src={imovel.imagem} alt={imovel.nome} />
      <h2>{imovel.nome}</h2>
      <p>{imovel.localizacao}</p>
      <p>R$ {imovel.preco.toLocaleString()}</p>
      <p>{imovel.descricao}</p>
    </div>
  );
}

export default PaginaImovel;
