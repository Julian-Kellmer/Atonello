import testimoniosBackground from '../assets/imagenes/fondosDePaginas/background-testimonios.jpg';
import CarruselBrands from '../components/gralComponents/CarruselBrands';
import Contacto from '../components/gralComponents/Contacto';
import VisitShowroom from '../components/gralComponents/VisitShowroom';
import TestimoniosEx from '../components/TestimoniosEx';

const Testimonios = () => {
  return (
    <main className="bg-[#fbf8f3]">
      <div
        id="hero"
        className="bg-cover bg-no-repeat h-screen bg-fixed bg-center"
        style={{
          backgroundImage: `url(${testimoniosBackground})`,
        }}>
        <div className="h-screen bg-gradient-to-t from-[#bbad7e] to-transparent flex justify-center items-center bg-left flex-col">
          <div className="text-white text-start w-full max-w-screen-lg px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center w-full space-y-4 md:space-y-0 ">
              <div className="md:w-2/3">
                <h1 className="text-5xl md:text-9xl font-serif mb-4">SERVICIOS</h1>
                <p className="text-lg md:text-xl leading-relaxed">
                  En Antonello, ofrecemos una experiencia de sastrería única, con atención
                  meticulosa a cada detalle. Desde trajes a medida y camisas personalizadas hasta
                  accesorios exclusivos, nuestros servicios están diseñados para realzar tu estilo y
                  confianza. Descubre la excelencia de la confección artesanal y la calidad
                  incomparable que solo una boutique de lujo puede ofrecer.
                </p>
              </div>
              <button className="mt-8 md:mt-0 md:ml-auto bg-[#bbad81] text-white py-3 px-6 rounded-lg text-lg hover:bg-[#a59870] transition-all duration-200 ease-in-out">
                Agendar cita
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:h-72 bg-[#bbad7e]"></div>
      <TestimoniosEx />
      <Contacto /> 
       <VisitShowroom /> 
       <CarruselBrands /> 
    </main>
  );
};
export default Testimonios;
