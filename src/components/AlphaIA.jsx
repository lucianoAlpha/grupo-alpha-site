import React from 'react'

function AlphaIA() {
  return (
    <section id="alphaia" className="py-16 px-4 bg-zinc-950 text-white text-center">
      <h2 className="text-3xl font-bold mb-4">Alpha IA</h2>
      <p className="text-zinc-400 max-w-2xl mx-auto mb-6">
        Em breve, você poderá conversar com a inteligência artificial do Grupo Alpha e receber orientações personalizadas sobre compra de imóveis.
      </p>
      <input
        type="text"
        placeholder="Faça uma pergunta para a Alpha IA..."
        className="w-full max-w-md px-4 py-2 rounded-lg text-black"
        disabled
      />
      <p className="text-xs text-zinc-600 mt-2">(Em desenvolvimento...)</p>
    </section>
  )
}

export default AlphaIA
