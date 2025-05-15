// src/pages/Imovel.jsx
import React from 'react';
import styles from './Imovel.module.css';

function Imovel({ imovel }) {
  if (!imovel) {
    return <p>Imóvel não encontrado.</p>;
  }

  return (
    <div className={styles.card}>
      <img src={imovel.imagem} alt={imovel.nome} className={styles.image} />
      <h2 className={styles.title}>{imovel.nome}</h2>
      <p className={styles.location}>{imovel.localizacao}</p>
      <p className={styles.price}>Preço: R$ {imovel.preco.toLocaleString()}</p>
      <p className={styles.description}>{imovel.descricao}</p>
    </div>
  );
}

export default Imovel;
