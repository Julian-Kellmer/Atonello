const Footer = () => {
  return (
    <footer className="bg-[rgb(22,22,22)] text-white py-8 px-4 relative ">
      <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sección de Teléfono */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Teléfono</h3>
          <p className="mb-2">Cel. 55 55 92 33 12</p>
          <p className="mb-2">Tel. 55 30 58 02 15</p>
        </div>

        {/* Sección de Horario */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Horario</h3>
          <p className="mb-2">Lunes a Viernes:</p>
          <p className="mb-2 text-yellow-500">08:00 am - 06:00 pm</p>
          <p className="mb-2">Sábado:</p>
          <p className="text-yellow-500">09:00 am - 02:00 pm</p>
        </div>

        {/* Sección de Suscripción */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold mb-4">Suscríbete</h3>
          <p className="mb-4">
            Recibe las últimas novedades, ofertas exclusivas y consejos de estilo directamente en tu
            correo.
          </p>
          <form className="flex flex-col sm:flex-row items-center justify-center md:justify-start">
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
        <p className="mb-4 md:mb-0">&copy; 2024 Antonello. Todos los derechos reservados</p>
        <div className="flex justify-center md:justify-end space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-facebook-f"></i>
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
