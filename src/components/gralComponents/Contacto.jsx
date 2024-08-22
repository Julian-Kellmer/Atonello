const Contacto = () => {
  return (
    <section className="bg-[#f2efea] flex flex-col text-center justify-center justify-around items-center h-64 md:h-80">
        <h1 className="text-black font-serif text-4xl md:text-7xl">CONTACTANOS</h1>
        <div className='px-4 text-sm md:text-lg'>
          <p> Estamos aquí para ayudarte a lucir tu mejor versión </p>
          <p> Para preguntas, citas o más información sobre nuestros servicios. Contáctanos </p>
        </div>
        <p className='px-4 text-sm md:text-lg'>Nuestro equipo estara encantado de asistirte</p>
        <div className='flex gap-4 items-center'> 
          <span className='font-semibold'>Correo:</span>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          <button className='bg-white py-2 px-4 rounded'>enviar</button>
        </div>
      </section>
  )
}
export default Contacto