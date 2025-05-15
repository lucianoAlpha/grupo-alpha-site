import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home({ imoveis }) {
  return (
    <div className={styles.container}>
      {imoveis.map((imovel) => (
        <div key={imovel.id} className={styles.card}>
          <img src={imovel.imagem} alt={imovel.titulo} />
          <h2 className={styles.title}>{imovel.titulo}</h2>
          <p className={styles.city}>{imovel.cidade} - {imovel.estado}</p>
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