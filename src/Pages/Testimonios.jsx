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
  return (
    <main className="bg-[#fbf8f3]">
      <div
        id="hero"
        className="bg-cover bg-no-repeat h-screen bg-fixed bg-center bg-top "
        style={{
          backgroundImage: `url(${testimoniosBackground})`,
        }}>
        <div className="h-screen bg-gradient-to-t from-[#bbad7e] to-transparent flex justify-center items-center bg-left flex-col">

          <div className="text-white text-start w-full max-w-screen-lg px-8">
            <div className="flex flex-col md:flex-row items-start md:items-center w-full space-y-4 md:space-y-0 ">
              <div className="md:w-2/3">
                <h1 className="text-5xl md:text-9xl font-serif mb-4">Testimonios</h1>
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
      <div className='flex flex-col md:py-28 md:gap-32 '>
      <div className=" md:mt-[-20rem] ">

      {testimoniosData.map((testimonio,index )=>(
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
      <CarruselBrands />
    </main>
  );
};
export default Testimonios;
