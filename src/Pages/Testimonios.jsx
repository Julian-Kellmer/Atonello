import testimoniosBackground from '../assets/imagenes/fondosDePaginas/background-testimonios.jpg';
import CarruselBrands from '../components/gralComponents/CarruselBrands';
import Contacto from '../components/gralComponents/Contacto';
import VisitShowroom from '../components/gralComponents/VisitShowroom';
import TestimoniosEx from '../components/TestimoniosEx';
import robert1 from '../assets/imagenes/testimonios/Robertopalazuelos/robert1.jpg';
import robert2 from '../assets/imagenes/testimonios/Robertopalazuelos/robert2.jpg';
import robert3 from '../assets/imagenes/testimonios/Robertopalazuelos/robert3.jpg';
import alberto1 from '../assets/imagenes/imagenes/expiriences/Alberto pelaez/alberto1.png'
import alberto2 from '../assets/imagenes/imagenes/expiriences/Alberto pelaez/alberto2.png'
import alberto3 from '../assets/imagenes/imagenes/expiriences/Alberto pelaez/alberto3.png'
import { useNavigate } from 'react-router-dom';

const testimoniosData = [
  {
    imgUrl: [robert1, robert2, robert3],
    name: 'Roberto Palazuelos',
    subName: 'En Antonello, encontré la perfección en cada detalle. Lacalidad de sus trajes y el servicio personalizado superan cualquier expectativa',
    description: 'Roberto Palazuelos ha confiado en Antonello para confeccionar sus trajes a la medida, camisas elegantes y una variedad de accesorios exclusivos. Cada prenda refleja su estilo sofisticado y su exigencia por la excelencia, haciendo de Antonello su sastrería de referencia para todas sus necesidades de vestimenta.',
  },
  {
    imgUrl: [alberto1, alberto2, alberto3],
    name: 'Alberto Pelaez',
    subName: '"La elegancia y la calidad de Antonello son incomparables. Cada prenda está hecha con una precisión y cuidado que reflejan el verdadero arte de la sastrería."',
    description: 'Alberto Peláez ha elegido Antonello para confeccionar sus trajes a medida, camisas de alta calidad y una variedad de accesorios exclusivos. Sus elecciones demuestran su aprecio por el diseño refinado y la impecable artesanía, consolidando a Antonello como su sastrería de confianza para cada ocasión.',
  },
]


const Testimonios = () => {
  const navigate = useNavigate();
const handleButtonClick = () => {
  navigate('/Citas')
}
  return (
    <main className="bg-[#fbf8f3]">
      <div
        id="hero"
        className="bg-cover bg-center bg-no-repeat h-screen bg-fixed"
        style={{
          backgroundImage: `url(${testimoniosBackground})`,
        }}>
        <div className='flex flex-col md:flex-row  justify-between  bg-gradient-to-t from-[#bbad7e] to-transparent  '>

          <div className="h-screen flex flex-col  md:w-1/2  justify-center md:justify-end md:pb-40">
            <div className="text-white text-start px-8">
              <h1 className="text-5xl md:text-9xl my-2 font-didot ">Experiencias <br /><span className='font-birthstone'>de clientes</span></h1>
              <p className="text-lg md:text-xl w-full  py-8">
              Descubre lo que nuestros distinguidos clientes tienen que decir sobre su experiencia con Antonello. Cada testimonio refleja nuestra dedicación a la excelencia, desde la atención personalizada hasta la confección impecable de cada prenda. Lee sus historias y déjate inspirar por la elegancia y el estilo que sólo una sastrería de alta gama puede ofrecer.
              </p>
            </div>
          </div>

          <div className='flex items-center  md:w-1/2 justify-center'>

          <button onClick={handleButtonClick} className="md:mt-0 md:mt-36 bg-black text-white py-4 px-8 font-commissioner  text-xl hover:bg-[#a59870] transition-all duration-200 ease-in-out">
            Agendar cita
          </button>
          </div>
        </div>
      </div>
      <div className=" md:h-72 bg-[#bbad7e]"></div>
      <div className='flex flex-col md:py-28 md:gap-32 '>
        <div className=" md:mt-[-20rem] ">

          {testimoniosData.map((testimonio, index) => (
            <TestimoniosEx
              key={index}
              index={index}
              images={testimonio.imgUrl}
              name={testimonio.name}
              subName={testimonio.subName}
              description={testimonio.description}

            />
          ))}

        </div>
      </div>

      <Contacto />
      <VisitShowroom />
      <CarruselBrands imageCount={4} />
    </main>
  );
};
export default Testimonios;
