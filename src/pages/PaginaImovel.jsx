import React from 'react';
import { useParams } from 'react-router-dom';
import Imovel from './Imovel';
import imoveis from '../data/imoveis';
import styles from './PaginaImovel.module.css';

function PaginaImovel() {
  const { id } = useParams();
  const imovel = imoveis.find((item) => item.id === parseInt(id));

  return (
    <div className={styles.pageContainer}>
      <div className={styles.card}>
        <Imovel imovel={imovel} />
      </div>
    </div>
  );
}

export default PaginaImovel;