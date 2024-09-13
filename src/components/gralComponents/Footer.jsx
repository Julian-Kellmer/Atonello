const Footer = () => {
  return (
    <footer className="bg-[rgb(22,22,22)] text-white py-8 px-4 relative  ">
      <div className="  mx-auto grid px-16 grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div className=" flex flex-col gap-16  text-start">
        {/* Sección de Teléfono */}
          <div >
            <h3 className="text-5xl mb-4 font-didot">Teléfono</h3>
            <div className="font-commissioner text-xl">
              <p className="mb-2 "> Cel.<span className="text-Dorado">55 55 92 33 12</span> </p>
              <p className="mb-2">Tel. <span className="text-Dorado">55 30 58 02 15</span></p>
            </div>
          </div>
          {/* seccion correo */}
          <div >
            <h3 className="text-5xl mb-4 font-didot">Correo</h3>
            <a href="" className="mb-2 text-xl font-commissioner  text-Dorado "> antonello.riobravo@outlook.com</a>
          </div>
        </div>

        {/* Sección de Horario */}
        <div className="text-center ">
          <h3 className="mb-4  text-5xl  font-didot">Horario</h3>
          <div className="text-xl pt-8 flex flex-col gap-2 font-commissioner">
            <p className="mb-2">Lunes a Viernes:</p>
            <p className="mb-2 text-Dorado">08:00 am - 06:00 pm</p>
            <p className="mb-2">Sábado:</p>
            <p className="text-Dorado">09:00 am - 02:00 pm</p>
          </div>
        </div>

        {/* Sección de Suscripción */}
        <div className="text-center max-w-lg  flex flex-col gap-6 ">
          <h3 className="mb-4  text-5xl  font-didot">Suscríbete</h3>
          <p className="mb-4 font-commissioner text-xl">
            Recibe las últimas novedades, ofertas exclusivas y consejos de estilo directamente en tu
            correo.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center ">
            <input
              type="email"
              placeholder="Correo electrónico"
              className="text-black px-4 py-2 w-full sm:w-auto mb-2 sm:mb-0 sm:mr-2 rounded"
            />
            <button className="bg-gray-700 text-white px-4 py-2 rounded">Enviar</button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center md:flex md:items-center md:justify-between">
        <p className="mb-4 md:mb-0 font-commissioner">&copy; 2024 Antonello. Todos los derechos reservados</p>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-white hover:text-gray-400">

          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
