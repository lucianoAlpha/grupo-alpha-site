import React from 'react'

function PropertyCard({ title, price, location, image }) {
  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden shadow-md hover:scale-105 transition">
      <img src={image} alt={title} className="h-48 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-zinc-400">{location}</p>
        <p className="text-primary font-bold mt-2">R$ {price.toLocaleString()}</p>
      </div>
    </div>
  )
}

export default PropertyCard
