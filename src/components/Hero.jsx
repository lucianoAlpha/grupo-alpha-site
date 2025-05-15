import React from 'react'

function Hero() {
  return (
    <section className="bg-zinc-900 text-white pt-24 pb-16 text-center">
      <h1 className="text-4xl md:text-5xl font-bold">Seu novo imóvel começa aqui.</h1>
      <p className="text-zinc-400 mt-4 text-lg">
        Compre com segurança e visão de futuro com o <span className="text-primary font-semibold">Grupo Alpha</span>.
      </p>
      <a href="#imoveis">
        <button className="mt-6 px-6 py-3 bg-primary text-black rounded-full text-lg hover:bg-yellow-500 transition">
          Ver imóveis à venda
        </button>
      </a>
    </section>
  )
}

export default Hero
