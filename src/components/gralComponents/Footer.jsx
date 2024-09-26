import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="bg-[rgb(22,22,22)] text-white py-8 px-4 relative  ">
      <div className="  mx-auto grid px-16 grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div className=" flex flex-col gap-16  md:text-start text-center">
          {/* Sección de Teléfono */}
          <div >
            <h3 className="text-5xl mb-4 font-didot ">Teléfono</h3>
            <div className="font-commissioner text-xl">
              <div className="flex gap-4 flex-col md:flex-row items-center">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 24 24">
                  <path fill="#fff" d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"></path>
                </svg>
                <p className="mb-2 "> <span className="text-Dorado">55 30 58 02 15</span> </p>
              </div>
              <div className="flex gap-4 flex-col md:flex-row items-center">
                <span class="material-symbols-outlined">
                  call
                </span>
                <p className="mb-2"> <span className="text-Dorado">55 55 92 33 12 </span></p>

              </div>
            </div>
          </div>
          {/* seccion correo */}
          <div  className='flex flex-col gap-2'>
            <h3 className="text-5xl mb-4 font-didot">Correo y redes</h3>
            <div className='flex gap-4 flex-col md:flex-row'>
              <span class="material-symbols-outlined">
                mail
              </span>
              <a href="" className="mb-2 text-xl font-commissioner  text-Dorado "> antonello.riobravo@outlook.com</a>
            </div>
            <div className="flex gap-4 flex-col md:flex-row items-center ">
              <a href="https://www.facebook.com/share/6CBSLU1UDnHEU8bc/?mibextid=LQQJ4d" className="text-white hover:text-gray-400 w-[25px] h-[25px]" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f fa-2x"></i>
              </a>
              <a href="" className="mb-2 text-xl font-commissioner  text-Dorado "> Facebook</a>

            </div>

            <div className="flex flex-col md:flex-row items-center gap-4">


              <a href="https://www.instagram.com/casimires_riobravo/" className="text-white hover:text-gray-400 w-[25px] h-[25px]" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram fa-2x "></i>
              </a>
              <a href="" className="mb-2 text-xl font-commissioner  text-Dorado "> Instagram</a>
            </div>

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
