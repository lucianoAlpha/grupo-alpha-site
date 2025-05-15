// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import imoveis from '../data/imoveis';
import styles from './Home.module.css';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Encontre o imóvel dos seus sonhos</h1>
          <p>Casas, apartamentos e coberturas nos melhores bairros</p>
          <Link to="/imovel/1" className={styles.heroButton}>Ver imóveis</Link>
        </div>
      </section>

      {/* Lista de Imóveis */}
      <section className={styles.lista}>
        {imoveis.map((imovel) => (
          <div key={imovel.id} className={styles.card}>
            <img src={imovel.imagem} alt={imovel.nome} className={styles.imagem} />
            <div className={styles.info}>
              <h2>{imovel.nome}</h2>
              <p>{imovel.localizacao}</p>
              <p>R$ {imovel.preco.toLocaleString()}</p>
              <p>{imovel.descricao}</p>
              <Link to={`/imovel/${imovel.id}`} className={styles.botao}>Ver mais</Link>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Home;
