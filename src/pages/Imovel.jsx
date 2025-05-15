import React from 'react';
import styles from './Imovel.module.css';

function Imovel({ imovel }) {
  if (!imovel) {
    return <p>Imóvel não encontrado.</p>;
  }

  return (
    <div className={styles.container}>
      <img src={imovel.imagem} alt={imovel.titulo} className={styles.image} />
      <h1 className={styles.title}>{imovel.titulo}</h1>
      <p className={styles.texto}><span className={styles.label}>Localização:</span> {imovel.cidade}-{imovel.estado}</p>
      <p className={styles.texto}><span className={styles.label}>Preço:</span> R$ {imovel.preco.toLocaleString()}</p>
      <p className={styles.texto}><span className={styles.label}>Descrição:</span> {imovel.descricao}</p>
      <a
        className={styles.button}
        href={`https://api.whatsapp.com/send?phone=5599999999998&text=Olá! Tenho interesse no imóvel ${imovel.titulo}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Fale conosco
      </a>
    </div>
  );
}

export default Imovel;