// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { imoveis } from '../data/imoveis';

function Home() {
  return (
    <div className={styles.container}>
      {imoveis?.map((imovel) => (
        <div key={imovel.id} className={styles.card}>
          <img src={imovel.imagem} alt={imovel.nome} />
          <h2 className={styles.title}>{imovel.nome}</h2>
          <p className={styles.city}>{imovel.localizacao}</p>
          <p className={styles.price}>R$ {imovel.preco.toLocaleString()}</p>
          <p className={styles.description}>{imovel.descricao}</p>
          <Link to={`/imovel/${imovel.id}`}>
            <button className={styles.button}>Ver mais</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
