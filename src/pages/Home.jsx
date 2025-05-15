import { Link } from 'react-router-dom'

const imoveis = [
  {
    id: 1,
    titulo: 'Casa Térrea Moderna',
    localizacao: 'São Paulo - SP',
    preco: 'R$ 1 250 000',
    descricao: 'Casa moderna com 3 quartos, jardim e garagem para 2 carros.',
    imagem: '/public/casa.jpg'
  },
  {
    id: 2,
    titulo: 'Apartamento com Varanda',
    localizacao: 'Curitiba - PR',
    preco: 'R$ 890 000',
    descricao: 'Apartamento no andar alto, 2 quartos e vista panorâmica.',
    imagem: '/public/apto.jpg'
  }
]

export default function Home() {
  return (
    <div className="container">
      <h1>Imóveis em Destaque</h1>
      {imoveis.map(imovel => (
        <div className="card" key={imovel.id}>
          <img src={imovel.imagem} alt={imovel.titulo} />
          <h2>{imovel.titulo}</h2>
          <p>{imovel.localizacao}</p>
          <strong>{imovel.preco}</strong>
          <p>{imovel.descricao}</p>
          <Link to={`/imovel/${imovel.id}`} className="botao">Ver mais</Link>
        </div>
      ))}
    </div>
  )
}