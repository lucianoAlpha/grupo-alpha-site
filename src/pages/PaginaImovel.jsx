// src/pages/PaginaImovel.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Imovel from './Imovel';
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
      <Imovel imovel={imovel} />
    </div>
  );
}

export default PaginaImovel;
