const Contacto = () => {
  return (
    <section className="bg-Marmol flex flex-col text-center justify-center justify-around items-center  px-8    ">
      <h1 className="text-black font-didot text-4xl md:text-7xl py-16">CONTACTANOS</h1>
      <div className='px-4 text-sm md:text-lg font-comissioner '>
        <p> Estamos aquí para ayudarte a lucir tu mejor versión </p>
        <p> Para preguntas, citas o más información sobre nuestros servicios. Contáctanos </p>
      </div>
      <p className='px-4 text-sm md:text-lg font-comissioner'>Nuestro equipo estara encantado de asistirte</p>
      <div className='flex gap-4 items-center py-16'>
        <span className='font-regular font-commissioner  text-xl'>Correo:</span>
        <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <button className='bg-white py-2 px-6 rounded text-gray-300 hover:text-gray-800 hover: transition-all duration-300 ease-in-out '>Enviar</button>
      </div>
    </section>
  )
}
export default Contacto