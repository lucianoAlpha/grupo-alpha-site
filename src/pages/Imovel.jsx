import { useParams } from 'react-router-dom'
import './Home.css'

const dados = {
  1: {
    titulo: 'Casa Térrea Moderna',
    localizacao: 'São Paulo-SP',
    preco: 'R$ 1 250 000',
    descricao: 'Casa moderna com 3 quartos, jardim e garagem para 2 carros.',
    imagem: '/public/casa.jpg'
  },
  2: {
    titulo: 'Apartamento com Varanda',
    localizacao: 'Curitiba-PR',
    preco: 'R$ 890 000',
    descricao: 'Apartamento no andar alto, 2 quartos e vista panorâmica.',
    imagem: '/public/apto.jpg'
  }
}

export default function Imovel() {
  const { id } = useParams()
  const imovel = dados[id]

  return (
    <div className="container">
      <div className="card">
        <img src={imovel.imagem} alt={imovel.titulo} />
        <h1>{imovel.titulo}</h1>
        <p><strong>Localização:</strong> {imovel.localizacao}</p>
        <p><strong>Preço:</strong> {imovel.preco}</p>
        <p><strong>Descrição:</strong> {imovel.descricao}</p>
        <a href="https://api.whatsapp.com/send?phone=5599999999998&text=Olá, tenho interesse no imóvel!" className="botao">Fale conosco</a>
      </div>
    </div>
  )
}