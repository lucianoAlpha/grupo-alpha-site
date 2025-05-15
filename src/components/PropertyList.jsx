import React from 'react'
import PropertyCard from './PropertyCard'

const properties = [
  {
    id: 1,
    title: 'Apartamento Luxo no Centro',
    price: 850000,
    location: 'São Paulo, SP',
    image: 'https://source.unsplash.com/random/400x300?apartment',
  },
  {
    id: 2,
    title: 'Casa com piscina',
    price: 1200000,
    location: 'Belo Horizonte, MG',
    image: 'https://source.unsplash.com/random/400x300?house',
  },
  {
    id: 3,
    title: 'Cobertura moderna',
    price: 1900000,
    location: 'Curitiba, PR',
    image: 'https://source.unsplash.com/random/400x300?penthouse',
  },
]

function PropertyList() {
  return (
    <section id="imoveis" className="py-16 px-4 bg-zinc-900">
      <h2 className="text-3xl font-bold text-center mb-10">Imóveis à Venda</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <PropertyCard key={property.id} {...property} />
        ))}
      </div>
    </section>
  )
}

export default PropertyList
