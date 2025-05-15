import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home({ imoveis }) {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Encontre o imóvel dos seus sonhos</h1>
        <p className={styles.heroSubtitle}>Compre, alugue ou anuncie com facilidade e segurança</p>
        <Link to="/contato" className={styles.heroButton}>Fale Conosco</Link>
      </div>

      <h2 className={styles.sectionTitle}>Imóveis em destaque</h2>
      <div className={styles.grid}>
        {imoveis.map((imovel) => (
          <div key={imovel.id} className={styles.card}>
            <img src={imovel.imagem} alt={imovel.nome} className={styles.image} />
            <div className={styles.cardContent}>
              <h3 className={styles.title}>{imovel.nome}</h3>
              <p className={styles.location}>{imovel.localizacao}</p>
              <p className={styles.price}>R$ {imovel.preco.toLocaleString()}</p>
              <p className={styles.description}>{imovel.descricao}</p>
              <Link to={`/imovel/${imovel.id}`} className={styles.button}>Ver mais</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
